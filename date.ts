export default class Date1{
  private _year: number;
  private _month: number;
  private _day: number;

  constructor(year : number, month: number, day:number){
    this._year = year;
    this._month = month;
    this._day = day;
  }
  /**
  * Les getters
  */
  get year():number{
    return this._year;
  }
  get month():number{
    return this._month;
  }
  get day():number{
    return this._day;
  }

  /**
  * Les setters
  */
  set year(value: number){
    if(value > 0){
      this._year = value;
    }else{
      console.log("Erreur l'année doit être suppérieur à 0");
    }

  }
  set month(value:number){
    if(value >= 1 && value < 13 ){
      this._month = value;
    }else{
      console.log("Erreur la valeur du mois doit être compris entre 1 et 12")
    }

  }
  set day(value:number){
    if(value > 1 && value < 32){
      this._day = value;
    }else{
      console.log("Le jour doit être dans [1;31]");
    }
  }
  toString(/*year:number,month:number,day:number*/):string{
    let date:string
    if(this._month < 10 || this._day < 10){
        date = this._year+'-0'+this._month+'-0'+this._day;
    }
    date = this._year+'-'+this._month+'-'+this._day;
    return date;
  }
  create(year:number,month:number,day:number): string{
    this._year = year;
    this._month = month;
    this._day = day;
    let defaultDate = this.toString();
    return defaultDate;
  }
  setDate(year: number, month: number, day : number):string{
    return this.create(year,month,day);
  }
  yesterday():string{
    let date : string;
    if(this._day == 1){
      if(this._month == 1){
        date = (this._year-1)+'-'+12+'-'+31;
        //return date;
      }else if(this._month == 11 || this._month == 9 || this._month == 6 || this._month == 4){
        if(this._month < 10){
            date = this._year+'-0'+this._month+'-'+31;
        }else{
          date = this._year+'-'+(this._month-1)+'-'+31;
        }
        //return date;
      }else if(this._month == 12 || this._month == 10 || this._month == 8 || this._month == 7 || this._month == 5 || this._month == 2){
        if(this._month < 10){
            date = this._year+'-0'+this._month+'-'+30;
        }else{
          date = this._year+'-'+(this._month -1)+'-'+30;
        }
        //return date;
      }else if(this._month==3){
        date = this._year+'-0'+2+'-'+28;
        //  return this._year+'-0'+2+'-'+28;
    }
   }else{
     date = this._year+'-'+this._month+'-'+(this._day-1);
   }
    return date;
  }

  tomorrow():string{
    let date : string;
    if(this._month == 11 || this._month == 9 || this._month == 6 || this._month == 4){
      if(this._day == 30){
        if(this._month < 10){
            date = this._year+'-0'+this._month+'-0'+1;
        }else{
          date = this._year+'-'+this._month+'-0'+1;
        }
      }
    }else if(this._month == 10 || this._month == 8 || this._month == 7 || this._month == 5){
      if(this._day == 31){
        if(this._month < 10){
            date = this._year+'-0'+this._month+'-0'+1;
        }else{
          date = this._year+'-'+this._month+'-0'+1;
        }
      }
    }else if(this._month == 12){
      if(this._day == 31){
        date = (this._year+1)+'-'+this._month+'-0'+1;
      }
    }
    else if(this._month = 1){
      if(this._day = 31){
        date = this._year+'-0'+2+'-0'+1;
      }
    }else{
      date = this._year+'-'+this._month+'-'+(this._day+1);
    }
    return date;
  }
  addDay(day : number = 1):string{
    let date;
    if(this._month == 11 || this._month == 9 || this._month == 6 || this._month == 4){
      if((this._day + day) == 30){
        if(this._month < 10){
          date = this._year+'-0'+(this._month+1)+'-0'+1;
        }else{
          date = this._year+'-'+this._month+'-0'+1;
        }
      }
    }else if(this._month == 10 || this._month == 8 || this._month == 7 || this._month == 5){
      if(this._day == 31){
        if(this._month < 10){
          date = this._year+'-0'+(this._month+1)+'-0'+1;
        }else{
          date = this._year+'-'+this._month+'-0'+1;
        }
      }
    }else if(this._month == 12){
      if(this._day == 31){
        date = (this._year+1)+'-01-01';
      }
    }
    else if(this._month = 1){
      if(this._day = 31){
        date = this._year+'02-01';
      }
    }
    return date;
  }
  addMonth(month: number = 1):string{
    return ;
  }
  addYear(year : number = 1):string{
    return ;
  }
  subDay(day:number = 1):string{
    return ;
  }
  subMonth(month:number = 1):string{
    return ;
  }
  subYear(year:number = 1){

  }

}
