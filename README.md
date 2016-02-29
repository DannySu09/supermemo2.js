Implement the SuperMemo 2 algorithm.

Check this article for detail: [https://www.supermemo.com/english/ol/sm2.htm](https://www.supermemo.com/english/ol/sm2.htm)

## Usage

```js
import supermemo2 from 'supermemo2'

let quality // A number between 0 and 5 that indicate the quality of review. 0 is the worse while 5 is the best.
let lastSchedule // The duration of last review space.
let lastFactor // The factor that was used to caculate last schedule.
let ret = supermemo2(quality, lastSchedule, lastFactor)
```

The output will be: 

```js
{
    schedule: Number, // The next review space.
    factor: Number, // The factor that should be use in the next round of caculation.
    isRepeatAgain: Boolean // If is true, should review the item again until the quality is not less than 4.
}
```