Add-Type -AssemblyName System.Drawing
$img = new-object System.Drawing.Bitmap("C:\React Project\Brillo Digitals Website\public\b_d_logo.png")
$colors = @{}
for($x = 0; $x -lt $img.Width; $x += 5) {
    for($y = 0; $y -lt $img.Height; $y += 5) {
        $c = $img.GetPixel($x, $y)
        if($c.A -gt 100) {
            if ($c.R -gt 100 -and $c.G -gt 80 -and $c.B -lt $c.R) {
                $hex = "#{0:X2}{1:X2}{2:X2}" -f $c.R, $c.G, $c.B
                if($colors.ContainsKey($hex)) {
                    $colors[$hex]++
                } else {
                    $colors[$hex] = 1
                }
            }
        }
    }
}
$img.Dispose()
$colors.GetEnumerator() | Sort-Object Value -Descending | Select-Object -First 10
