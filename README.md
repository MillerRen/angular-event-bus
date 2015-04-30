# angular-event-bus
angular global custom event service

#usage
+ Install angular-event-bus module with bower
```bash
bower install angular-event-bus --save
```
+ Inject the `angular-event-bus` module in your app
```js
angular.module('myApp', ['angular-event-bus']);
```
+ Inject the `$bus` in your controller
```js
angular.module('myApp')
  .controller('MainCtrol',function($bus){
    $bus.$on('event:name', function(data){
        console.log('on event:name',data);
    });
    $bus.$emit('event:name',{key:'value'});
  });
```


