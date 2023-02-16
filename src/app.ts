
//intensity

type num = number|number[]|[number]|[number[]]|{}|{}[]|[{}];

// building block for training unit


class TrainingUnitMainExercise {

    mainExercise: string;
    load: num;
   
    constructor(mainExercise: string, load: num) {
        this.mainExercise = mainExercise;
        this.load = load;
    }   
}

// elaborate on load from here
class AccesoryExercise {

    accesory: string;
    load: num;

    constructor(accesory:string, load:num) {
        this.accesory = accesory, 
        this.load = load 
    }
} 

class GeneralFitness {

    activity: string;
    load: num;

    constructor(activity:string, load:num) {
        this.activity = activity, 
        this.load = load 
    }
}

class ActiveRecovery {
    
    activity: string;
    load: num;

    constructor(activity:string, load:num) {
        this.activity = activity, 
        this.load = load 
    }
}


class TrainingUnit {

    mainExercise: {};
    accesories: {} | {}[]

    constructor() {
        this.mainExercise = TrainingUnitMainExercise;
        this.accesories = AccesoryExercise;
    }
}

// This has to be learned and improved upon 
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

    
const loadTheLoad = (repetitions: number, intensity: number) => {
    const repMax: number = repetitions * intensity * 0.033 + intensity;
    return repMax;
};

// int stands for intensity ( weight of kg u can bear )
// static base ready to be morphed

let load: num;
let intensity:num;
let testooo : number[] ;
let sets;
let reps;
let newTrainingUnit:{};
let n: num = 0.86


let repMax = 100

// program should provide support to 7 sets and 12 reps in basic setting
// 7 = 3 + 2 + 2 
// 6 = 2 + 2 + 2
// 5 = 2 + 2 + 1
// 4 = 2 + 2
// 3 + 2 + 1
// 2 = 1 + 1
// 1 = 1
function lockAndLoad(loadIntensity: number[], sets: number, reps: number) {
        //build logic 4 knowing when to go up in reps
        let load =  loadIntensity.map((element: number) => {
            if (sets == 7) {
                    if (element === loadIntensity[0])
                    { 
                        return  [`${element} kg`, 3, reps]  
                    }
                    if(element === loadIntensity[1])
                    {  
                        return [`${element} kg`, 2, reps]
                    }
                    else {
                        return [`${element} kg`, 1, reps]
                    }};
            if (sets == 6) {
                return [`${element} kg`, 2, reps]
            }
            if (sets == 5) {
                if (element !== loadIntensity[2]) {
                return [`${element} kg`, 2, reps]
                }
                else {
                    return [`${element} kg`, 1, reps]
                }
            };
            if (sets == 4) {
                if (element !== loadIntensity[0]) {
                    return [`${element} kg`, 1, reps]
                }
                else {
                return [`${element} kg`, 2, reps]
                }
            };
            if (sets == 3) {
                return [`${element} kg`, 1, reps]
            };
            return;  
            })
        if (sets === 2 || sets === 1) {
            return [` Choose from ${loadIntensity[0]}, ${loadIntensity[1]}, ${loadIntensity[2]} kg and do ${sets} of ${reps}`]
        }
        else{
       
        return load;
        }
};

console.log(lockAndLoad([repMax * 0.88,repMax * 0.90,repMax * 0.92],7,3))
console.log(lockAndLoad([repMax * 0.88,repMax * 0.90,repMax * 0.92],6,3))
console.log(lockAndLoad([repMax * 0.8 ,repMax * 0.825, repMax * 0.85],5,5))

console.log(lockAndLoad([repMax * 0.88,repMax * 0.90,repMax * 0.92],4,3))
console.log(lockAndLoad([repMax * 0.88,repMax * 0.90,repMax * 0.92],3,3))
console.log(lockAndLoad([repMax * 0.88,repMax * 0.90,repMax * 0.92],2,3))



const progress4Strength = (mainExercise: string, repMax: number, int80plus :boolean, int88plus : boolean, int95plus: boolean) :{} => {
    // this needs to be extended

    if (int80plus == true && int88plus == false && int95plus == false) {

        load = lockAndLoad([repMax * 0.8 ,repMax * 0.825, repMax * 0.85],5,5)
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == true && int95plus == false) {

        load = lockAndLoad([repMax * 0.875 ,repMax * 0.9,repMax * 0.925],6,3)
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == false && int95plus == true) {
        // u can create sick logick here mate , believe in yourself ! % random creator
        
        load = lockAndLoad([repMax * 0.90, repMax * 0.925, repMax * 0.95],7,2);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    return newTrainingUnit;
};

const progress4Volume = (mainExercise: string, repMax: number, int65plus: boolean, int70plus: boolean, int75plus: boolean) => {
    // These are default !!

    if (int65plus == true && int70plus == false && int75plus == false) {

        load = lockAndLoad([repMax * 0.65, repMax * 0.6750, repMax * 0.70],3,12);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == true && int75plus == false) {
      
        load = lockAndLoad([repMax * 0.7, repMax * 0.7250, repMax * 0.75],3,10)
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == false && int75plus == true) {
        sets = 3;
        reps = 8;
        load = lockAndLoad([repMax * 0.75, repMax * 0.7750, repMax * 0.8],3,8)
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
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
const z = basicOverload(95,125,130)

let usedUnits: any = []


const freefallProgressionSingle = (load: {}[]|[]) => {
// iterate one unit sesion at a time - element(mainexercise) !== next element / frozen until array isnt dividible by 3

    return load.splice(1);
}
//progression of freeFall plan 
const freeFallProgression = (load: {}[]|[]) => {
        //tripletFall - iteration of 3 units binded together
        return load.splice(3);
        //duoFall - iteration of 2 units together

    }
        
    console.log(z)

// shuffle so no element repeats itself
// has to be worked on 
const playDice = (arr: {}[]|[]) => { 

    for (let i = arr.length - 1; i > 0; i--) {
        let j =  Math.floor(Math.random() * Math.floor(arr.length - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
}

console.log(playDice(z))

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
