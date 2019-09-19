## Router View Dom ##
[Demo](https://vlad88vlad.github.io/routers-view/)


Router View Dom is wrapper on simple react-router-dom providing a good 
development with routing for programmers.
## Install ##
``` bash
npm install router-view-dom --save
```
## Include ##
```
import RouterView from 'router-view-dom';
```

## Router View ##
```
import RouterView from 'router-view-dom';
```

Property      | Description   |Type          | Default       |
------------- | ------------- |------------- | ------------- |
routers    |should be array | ``` array ```    | ``` [] ```|

#### routers ####

Property      | Description   |Type          | Default       |
------------- | ------------- |------------- | ------------- |
path    |should be url path | ``` string ```    | ``` '' ```|
key     |optional   | ``` string ```    | index key|
component     |  - | ``` component ``` or ``` function```    |- |
strict     |  - | ```boolean```    |```false``` |
exact     |  - | ```boolean```    |```false``` |
routes     | children routes  | ```array```    |```[]``` |
before     | should be included function ```next```  | ```function```    |- |
next     | should be return  ```path``` or nothing  | ```function```    |- |

## Router Wrapper ##
```
import { RouterWrapper } from 'router-view-dom';
```

Property      | Description   |Type          | Default       |
------------- | ------------- |------------- | ------------- |
routerType    | can be  ``` hash ```  or  ``` '' ``` | ``` stirng ```    | ``` '' ```|




