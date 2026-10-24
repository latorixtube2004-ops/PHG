@echo off
cd /d "C:\Users\NAZEM\Desktop\Palm-Hills-Gulf-Netlify"
echo ========================================================
echo       Palm Hills Gulf - Uploading to GitHub
echo ========================================================
echo.
echo Current Target Repository:
echo https://github.com/latorixtube2004-ops/PHG.git
echo.
set /p USER_URL="Press Enter to use this URL, or paste another URL: "

if not "%USER_URL%"=="" (
    git remote remove origin 2>nul
    git remote add origin %USER_URL%
    echo Updated remote to: %USER_URL%
) else (
    git remote remove origin 2>nul
    git remote add origin https://github.com/latorixtube2004-ops/PHG.git
)

echo.
echo Pushing 189 files (including app, components, public, and netlify.toml)...
echo.
git push -u origin main --force
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   [SUCCESS] All files uploaded to GitHub!
    echo   Now go to Netlify and click Deploy site.
    echo ========================================================
) else (
    echo ========================================================
    echo   [NOTICE] If GitHub asks you to sign in, please
    echo   authorize in your browser window to complete the upload.
    echo ========================================================
)
pause
