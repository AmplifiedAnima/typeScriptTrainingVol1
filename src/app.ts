
//intensity

type num = number|number[] |{}[] |[{}];

// building block for training unit


class TrainingUnitMainExercise {
    mainExercise: string;
    reps: num;
    sets: num ;
    intensity: num;

    constructor(mainExercise: string, reps: num, sets: num, intensity: num) {
        this.mainExercise = mainExercise;
        this.reps = reps;
        this.sets = sets;
        this.intensity = intensity;
    }   
}

class trainingUnitAccesory { 
    accesory: string;
    accesorySets: number;
    accesoryReps: number;
    //balistic type of load 
    //bodyweight
    //plyometric
    //
    constructor(accesory: string, accesorySets: number, accesoryReps: number) {
        this.accesory = accesory
        this.accesorySets = accesorySets
        this.accesoryReps = accesoryReps
    }
} 

class IncreasingGeneralFitness extends TrainingUnitMainExercise {
        duration = this.reps;
        super (mainExercise: string, duration: number,sets: number, intensity: num) {
        this.mainExercise = mainExercise; 
        this.duration = duration;
        this.sets = sets;
        this.intensity = intensity;
    }
    
}

class TrainingUnit {
    mainExercise: {};
    accesories: {} | {}[]
    constructor() {
        this.mainExercise = TrainingUnitMainExercise;
        this.accesories = trainingUnitAccesory;
    }
}

const form4Load = document.getElementById('CHAD') as HTMLFormElement | null;
const button =  document.querySelector('button') as HTMLButtonElement;
const reps4Load = document.querySelector('#reps') as HTMLInputElement | null;
const weight4Load = document.querySelector<HTMLInputElement>('#weight');
const loadEstimate = document.getElementById('kuku') as HTMLElement| null;



form4Load?.addEventListener('submit', (e)=> {
    e.preventDefault()
    let z: number= loadTheLoad(Number(reps4Load?.value), Number(weight4Load?.value))

    //let outPut = document.createElement('li'); 
    if (weight4Load?.value == '' && reps4Load?.value == '' || weight4Load?.value == null && reps4Load?.value == null) 
   
    console.log(loadTheLoad(Number(reps4Load?.value), Number(weight4Load?.value)))
    console.log(z.toString())

})


function handleClick(this: HTMLElement) {
    console.log("Clicked!"); } 

    
const loadTheLoad = (repetitions: number,intensity: number) => {
    const repMax: number = repetitions * intensity * 0.033 + intensity;
    return repMax;
};

// int stands for intensity ( weight of kg u can bear )
// static base ready to be morphed

let intensity;
let sets;
let reps;
let newTrainingUnit = {};
let n: num = 0.86

const progress4Strength = (mainExercise: string, repMax : number, int88plus :boolean, int92plus : boolean, int95plus: boolean) :{} => {
    // this needs to be extended
    if (int88plus == true && int92plus == false && int95plus == false) {
        sets = 5
        reps = 5;
        intensity =  repMax * 0,88
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, reps, sets, intensity);
    }
    if (int88plus == false && int92plus == true && int95plus == false) {
        sets = 7;
        reps = 3;
        intensity = repMax * 0.92;
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, reps, sets, intensity);
    }
    if (int88plus == false && int92plus == false && int95plus == true) {
        sets = 8;
        reps = 2;
        intensity = repMax * 0.95;
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, reps, sets, intensity);
    }
    return newTrainingUnit;
};

const progress4Volume = (mainExercise: string, repMax: number, int65plus: boolean, int75plus: boolean, int85plus: boolean) => {

    if (int65plus == true && int75plus == false && int85plus == false) {
        sets = 3;
        reps = 12;
        intensity = repMax * 0.65;
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, reps, sets, intensity);
    
    }
    if (int65plus == false && int75plus == true && int85plus == false) {
        sets = 3;
        reps = 10;
        intensity = repMax * 0.75;
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, reps, sets, intensity);
    }
    if (int65plus == false && int75plus == false && int85plus == true) {
        sets = 3;
        reps = 8;
        intensity = repMax * 0.85;
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, reps, sets, intensity);
    }
    return newTrainingUnit;
};
// loading capacity 4 freefall training plan
// vol is 65%,75%, 85% 
// str is 88% 92% 95%

const basicOverload = (Squat: number, Bench: number, Deadlift: number): {}[] => {

    let overLoadedArray = [  
    // litle to medium/optimal load intensities/volume

        progress4Strength('Squat', Squat, true, false, false),
        progress4Volume('Bench', Bench, true, false, false),
        progress4Strength('Deadlift', Deadlift, true, false, false),

        progress4Volume('Squat',Squat, false, true, false),
        progress4Strength('Bench', Bench, true, false, false),
        progress4Volume('Deadlift', Deadlift, false , true ,false),
     
        progress4Strength('Squat', Squat, false, true ,false),
        progress4Volume('Bench', Bench, false, true, false),
        progress4Strength('Deadlift', Deadlift, true, false, false),

// middle to overload tier / hard/optimal

        progress4Volume('Squat', Squat, false , false, true),
        progress4Strength('Bench', Bench, false, true, false),
        progress4Volume('Deadlift', Deadlift, false, false, true),
     
        progress4Strength('Squat', Squat, false, false, true),
        progress4Volume('Bench', Bench, false, false, true),
        progress4Strength('Deadlift', Deadlift, false, false, true),

        progress4Volume('Squat', Squat, true , false, false),
        progress4Strength('Bench', Bench, false, false, true),
        progress4Volume('Deadlift', Deadlift,  true, false, false)]

        return overLoadedArray;
   }
const chooseWhichFirst = (overload:{}[], choice: string) => {

    if (choice === 'smoothParts') {
        return overload.splice(9)
    }

    if (choice === 'hardParts') {
       return overload.splice(0);
    };
    return


}
// what function returns
const z = basicOverload(100,100,100)

let usedUnits: any = []

//progression of freeFall plan 
const freeFallProgression = (load: {}[]|[]) => {
        //tripletFall - iteration of 3 units binded together
        return load.splice(3);
        //duaFall - iteration of 2 units together

    }
        
    console.log(z)


// shuffle so no element repeats itself
const playDice = (arr: {}[]|[]) => { 

    for (let i = arr.length - 1; i > 0; i--) {
        let j =  Math.floor(Math.random() * Math.floor(arr.length - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
}


const trackTheVolume = (overload: {}[]) => {
    let nag: number[] = []
    overload.filter((e: any) => {
        if (e.sets !== 0){
        e = e.sets * e.reps * e.intensity;
        nag.push(e);  
        };
    });
    return nag.reduce((acc: number,cur: number) => acc + cur);
};

// all volume units
const chooseFromVolume = (overload: {}[]) => {
    const highestVol = overload.filter((a: any) => {
        return a.sets === 3;
    });
    return highestVol;
}
// all strength units
const chooseFromIntensity = (overload: {}[]) => {
    const highestInt = overload.filter((a: any) => {
        return a.reps <= 5;
    });
    return highestInt;
}



// const hitThePr = (overload: {}[]) => {

// }

// console.log(mixLoadVolumeAndStrength(z,'smoothParts'))
// console.log(mixLoadVolumeAndStrength(z,'hardParts'))
// console.log(chooseFromVolume(z))
// console.log(chooseFromIntensity(z))
