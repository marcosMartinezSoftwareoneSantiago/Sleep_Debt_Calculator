function getSleepHours(day){
    var hours;
    switch (day){
      case 'monday':
        hours = 8;
        break;
      case 'tuesday':
        hours = 7;
        break;
      case 'wednesday':
        hours = 6;
        break;
      case 'thursday':
        hours = 5;
        break;
      case 'friday':
        hours = 4;
        break;
      case 'saturday':
        hours = 3;
        break;
      case 'sunday':
        hours = 9;
        break;
      default:
        hours = 0;
        break;
    }
    return hours;
  };
  
  function getActualSleepHours(){
    return 3+4+5+6+7+8+9;
  }
  
  function getIdealSleepHours(idealHours){
    return idealHours * 7;
  }
  
  function calculateSleepDebt(){
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours > idealSleepHours){
      console.log(`You got sleep more than needed it was ${actualSleepHours -idealSleepHours} hours over the ideal`);
    }else{
      if(actualSleepHours < idealSleepHours){
        console.log(`You should get some rest it was ${idealSleepHours - actualSleepHours} hours under the ideal`);
      }else{
        console.log(`You got the perfect amount of sleep`);
      }
    }
  }
  
  calculateSleepDebt();