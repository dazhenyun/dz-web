## API

### 组件API
|参数		    |数据类型			  |是否必填			|默认值			|备注						 |
|  ---- 	   |  ----  			| ----  		|  ----  		| ----						|
| nickname	   | String 			| 是 			| - 			| 用户昵称 					  |
| account 	   | String 			| 是 			| -				| 用户账号，用来判断使用颜色 	 |
| empStatus    | number 		    | 否 			| 1 		    | 用户状态，2则为灰色 	        |
| showPopover  | boolean 		    | 否			| true			| 是否显示popover浮层 	       |
| size   	   | number 			| 否 			| 32 			| 头像大小（宽高） 	    	   |
| linearGradient   | boolean 		| 否 			| false 		| 是否渐变 	            	  |
| randomColor  | boolean 		    | 否 			| true			| 是否随机颜色，如果不随机，则为固定蓝色	|
| onClick 	   | function 		    | 否 			| -				| 卡片内的头像点击			 	|
| theme 	   | String 		    | 否 			| default		| 卡片内的主题，default、plant	|


### 浮层API
|参数		  |数据类型			  |是否必填			|默认值			|备注						 |
|  ---- 	 |  ----  			| ----  		|  ----  		| ----						|
| trigger	 | String 			| 否 			| hover 		| 浮层详情显示方式，同Popover   |
| placement 	| String 	    | 否 			| rightTop   	| 浮层详情显示位置，同Popover 	 |
| cardConfig  | Array 			| 是 			| []			| 卡片内的详情配置 				|
