# 자필 후기 스캔 이미지에 실제 픽셀 블러를 입혀 웹 공개용 미리보기를 만드는 스크립트.
# 사용법: powershell -File scripts\blur-review-image.ps1 -InputPath "원본.jpg" -OutputPath "블러본.jpg"
# 원본 파일은 절대 web/assets 폴더에 넣지 말고, 이 스크립트로 만든 결과물만 게시하세요.

param(
    [Parameter(Mandatory=$true)][string]$InputPath,
    [Parameter(Mandatory=$true)][string]$OutputPath,
    [int]$MaxWidth = 900,
    [double]$BlurFactor = 0.045
)

Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Image]::FromFile((Resolve-Path $InputPath))

# 1) 웹에 쓸 적당한 크기로 축소 (원본 그대로 올리지 않음)
$ratio = $MaxWidth / $src.Width
$w = $MaxWidth
$h = [int]($src.Height * $ratio)

$resized = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($resized)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($src, 0, 0, $w, $h)
$g.Dispose()
$src.Dispose()

# 2) 아주 작게 축소했다가 다시 확대 -> 글씨를 읽을 수 없는 자연스러운 블러 효과
$tinyW = [Math]::Max(8, [int]($w * $BlurFactor))
$tinyH = [Math]::Max(8, [int]($h * $BlurFactor))

$tiny = New-Object System.Drawing.Bitmap($tinyW, $tinyH)
$g2 = [System.Drawing.Graphics]::FromImage($tiny)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($resized, 0, 0, $tinyW, $tinyH)
$g2.Dispose()

$blurred = New-Object System.Drawing.Bitmap($w, $h)
$g3 = [System.Drawing.Graphics]::FromImage($blurred)
$g3.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g3.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g3.DrawImage($tiny, 0, 0, $w, $h)
$g3.Dispose()
$tiny.Dispose()
$resized.Dispose()

$outDir = Split-Path -Parent $OutputPath
if ($outDir -and -not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir -Force | Out-Null }

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]82)
if ([System.IO.Path]::IsPathRooted($OutputPath)) {
    $resolvedOut = $OutputPath
} else {
    $resolvedOut = [System.IO.Path]::GetFullPath((Join-Path (Get-Location).Path $OutputPath))
}
$blurred.Save($resolvedOut, $jpegCodec, $encParams)
$blurred.Dispose()

Write-Output "Blurred: $OutputPath ($w x $h, tiny pass $tinyW x $tinyH)"
