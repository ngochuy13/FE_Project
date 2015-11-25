# Follow FE Team convention and the followings
# No Styling until HTML is done

## Coding Convention
* Tab with 2 spaces, no tab character allowed

## CSS Convention

* No decendant selector
* Limit the nested level in sass file as much as possible
* No meaningless name like "block-left, block-right"
* Reuse others created components.
* Use variables for:
* Font, color, some logic dimension 

## JS Convention
* No decendant selector in jQuery.
* Module pattern must be follow.
* Declare variable before using.


# Setting up and Run
##Setup
Access _html folder in terminal or cmd 

```
#!sh

sudo npm install
bower install
```
To run HTML pages
```
#!sh

gulp serve
```

To build HTML pages
```
#!sh

grunt build
```

To build icons
```
#!sh

grunt sprites
```

##Technical Approach (plugins):
* modernizr: 2.8.3
* bourbon: 3.2.4
* jquery: 1.11.1
* sticky: 
* owl-carousel2: 
* cookies-js: 
* pubsub: git@bitbucket.org:opendigital/rd0013.git