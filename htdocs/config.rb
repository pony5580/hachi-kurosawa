# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "./"
css_dir = "shared/css"
sass_dir = "shared/sass"
images_dir = "shared/imgs"
javascripts_dir = "shared/js"

relative_assets = true

output_style = :compact       # -t と同じ。出力時の style を指定する output_style = (environment == :production) ? :compressed : :expanded
line_comments = false          # 対応する行番号とファイル名の出力 false で無効に

# 開発 or 本番用の画像PATH
#if (environment == :production)
#	http_images_path = "imgs"
#else
#	http_images_path = "shared/imgs"	
#end


# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
