# For LTR 
- change file /app/jade/layouts/template-1.jade : extends layout
- gulp serve
# For RTL 
- change file /app/jade/layouts/template-1.jade : extends layout-rtl
- gulp styles
- gulp criticalStyles
- gulp converRTL
- gulp serve