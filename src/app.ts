
//intensity

type num = number|number[]|[number]|[number[]]|{}|{}[]|[{}];

// building block for training unit


class MainExercise {

    mainExercise: string| string[]
    load: num;
   
    constructor(mainExercise: string, load: num) {
        this.mainExercise = mainExercise;
        this.load = load;
    }   
}
// set types of exercises Bilateral/Unilateral

// elaborate on load from here
class AccesoryExercise {

    accesory: string | string[];
    load: num;

    constructor(accesory:string, load:num) {
        this.accesory = accesory, 
        this.load = load 
    }
} 

class MetabolicStress {

    activity: string|string[];
    metabolicLoad: num;
    // duration: num 
    // heartrate: num

    public constructor(activity: string, metabolicLoad: num) {
        this.activity = activity, 
        this.metabolicLoad = metabolicLoad
    }
}
 
class TrainingUnit {

    mainExercise: num;
    load: num; 
    accesories: num;
    accesoriesLoad: num;
    metabolicStress: num;

    constructor(accesoriesLoad: num) {
        this.mainExercise = MainExercise;
        this.load = load;
        this.accesories = AccesoryExercise;
        this.accesoriesLoad = accesoriesLoad;
        this.metabolicStress = MetabolicStress;
    
    }
}

// This has to be learned and improved upon 
const form4Load4: HTMLElement | null= document.getElementById('MainLoad');

const reps4LoadSquat: HTMLInputElement | null = document.querySelector('#repsSquat') ;
const intensity4Squat: HTMLInputElement | null = document.querySelector('#intensitySquat');

const reps4Deadlift: HTMLInputElement | null = document.querySelector('#repsDeadlift') ;
const intensity4Deadlift: HTMLInputElement | null = document.querySelector('#intensityDeadlift');

const reps4Bench: HTMLInputElement | null = document.querySelector('#repsBench') ;
const intensity4Bench: HTMLInputElement | null = document.querySelector('#intensityBench')

const button: HTMLButtonElement | null =  document.querySelector('button');
const loadEstimateSquat: HTMLElement | null = document.getElementById('LoadEstimate_Squat') 
const loadEstimateDeadlift:  HTMLElement | null = document.getElementById('LoadEstimate_Deadlift') 
const loadEstimateBench: HTMLElement | null = document.getElementById('LoadEstimate_Bench')

const dataFromFunc = document.getElementById('kuku') as HTMLTableElement | null


form4Load4?.addEventListener('submit', (e)=> {
    e.preventDefault()

    const squatLoad: number = loadTheLoad(Math.round(Number(reps4LoadSquat?.value)), Number(intensity4Squat?.value))
    const deadliftLoad: number = loadTheLoad(Math.round(Number(reps4Deadlift?.value)), Number(intensity4Deadlift?.value))
    const benchLoad: number = loadTheLoad(Math.round(Number(reps4Bench?.value) ), Number(intensity4Bench?.value))
    
    const repMax4Squat = squatLoad.toString()
    const repMax4Deadlift = deadliftLoad.toString()
    const repMax4Bench = benchLoad.toString()

    const array:  any = basicOverload(Math.round(squatLoad),Math.round(deadliftLoad),Math.round(benchLoad))
    if (
        intensity4Squat?.value == '' && reps4LoadSquat?.value == ''
        && intensity4Deadlift?.value == '' &&  reps4Deadlift?.value == '' 
        && intensity4Bench?.value == '' && reps4Bench?.value == ''
    ) 
    // if (intensity4Deadlift?.value === '' && reps4Deadlift?.value === ''|| Number(reps4Deadlift?.value))

    console.log(array)
   
    const Projection: any = array.map((element: any, index: number ) => {
        let table: string = ''
        table +=`  
                <tr>
                <th><h4>${index+1}. Training unit</h4></th>
                </tr>
                <tr>
                <td><h4> Main exercise : ${element.mainExercise}<h4></td>
                </tr>
                <td><h5>Intensity <h5></td>
                <td><h5>Sets <h5></td>
                <td></td>
                <td><h5>Reps <h5></td>
                <tr>
                <td><h5>${Math.round(element.load[0][0])} kg </h5></td>
                <td><h5>${element.load[0][1]}</h5></td>
                <td></td>
                <td><h5>${element.load[0][2]}</h5></td>
                </tr>
                <tr>
                <td><h5>${Math.round(element.load[1][0])} kg </h5></td>
                <td><h5>${element.load[1][1]}</h5></td>
                <td></td>
                <td><h5>${element.load[1][2]}</h5></td>
                </tr>
                <tr>
                <td><h5>${Math.round(element.load[2][0])} kg </h5></td>
                <td><h5>${element.load[2][1]}</h5></td>
                <td></td>
                <td><h5>${element.load[2][2]}</h5></td>
                </tr>
                <tr>
                <td><h4> Accesory I <h4></td>
                </tr>
                <tr>
                <td><h4> Accesory II <h4></td>
                </tr>
                `
        return table;
    })
    dataFromFunc!.innerHTML = Projection


 
    // loadEstimateSquat!.innerText = repMax4Squat
    // loadEstimateBench!.innerText = repMax4Bench
    // loadEstimateDeadlift!.innerText = repMax4Deadlift

    console.log(repMax4Squat,repMax4Deadlift,repMax4Bench)
    console.log(array)

    }
)


function handleClick(this: HTMLElement) {
    console.log("Clicked!"); 
} 

const loadTheLoad = (repetitions: number, intensity: number) => {
    const repMax:
     number = repetitions * intensity * 0.033 + intensity;
    return repMax;
};

// int stands for intensity ( weight of kg u can bear )
// static base ready to be morphed

let load: num;
let intensity: num;
let newTrainingUnit: MainExercise;

const lockAndLoad = (loadIntensity: number[], sets: number, reps: number) => {
        //build logic 4 knowing when to go up in reps
    let load =  loadIntensity.map((element: number) => {

        if (sets == 7) { 
            if (element === loadIntensity[0]) { 
                return  [element, 3, reps]
            }
            if(element === loadIntensity[1]) {  
                return [element, 2, reps]
            } 
            else { 
                return [element, 1, reps]
            }
        }
        if (sets == 6) {
                return [element, 2, reps] 
        }
        if (sets == 5) {
            if (element !== loadIntensity[2]) {
                return [element, 2, reps];
            } 
            else {
                return [element, 1, reps];
            }
        }
        if (sets == 4) {
            if (element !== loadIntensity[0]) {
                return [element, 1, reps];
            } 
            else { 
                return [element, 2, reps];
            }
        }
        if (sets == 3) {
            return [element, 1, reps];
        }
            return; 
    })
        if (sets === 2 || sets === 1) { 
            return [` Choose from ${loadIntensity.filter((e) => {return e} )} kg and do sets: ${sets} of ${reps} reps.`];
        }
        else {
            return load;
    }
}; 


const progress4Strength = (mainExercise: string, repMax: number, int80plus :boolean, int88plus : boolean, int95plus: boolean) : MainExercise=> {
    // this needs to be extended
    if (int80plus == true && int88plus == false && int95plus == false) {

        load = lockAndLoad([repMax * 0.8 ,repMax * 0.825, repMax * 0.85],5,5)
        return newTrainingUnit = new MainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == true && int95plus == false) {

        load = lockAndLoad([repMax * 0.875 ,repMax * 0.9, repMax * 0.925],6,3)
        return newTrainingUnit = new MainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == false && int95plus == true) {
    
        load = lockAndLoad([repMax * 0.90, repMax * 0.925, repMax * 0.95],7,2);
        return newTrainingUnit = new MainExercise(mainExercise, load);
    }
    return newTrainingUnit;
};

const progress4Volume = (mainExercise: string, repMax: number, int65plus: boolean, int70plus: boolean, int75plus: boolean) => {
    // These are default !!
    if (int65plus == true && int70plus == false && int75plus == false) {

        load = lockAndLoad([repMax * 0.65, repMax * 0.6750, repMax * 0.70],3,12);
        return newTrainingUnit = new MainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == true && int75plus == false) {

        load = lockAndLoad([repMax * 0.7, repMax * 0.7250, repMax * 0.75],3,10)
        return newTrainingUnit = new MainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == false && int75plus == true) {

        load = lockAndLoad([repMax * 0.75, repMax * 0.7750, repMax * 0.8],3,8)
        return newTrainingUnit = new MainExercise(mainExercise, load);
    }
    return newTrainingUnit;
};

const basicOverload = (Squat: number, Bench: number, Deadlift: number,  ): {}[] => {

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
        progress4Strength('Deadlift', Deadlift, false, true, false),
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
};


// const accesoryOverload = (mainOverload: num , accesories: num) => {
    
// }

const chooseWhichFirst = (overload:{}[]|[], choice: string) => {

    if (choice === 'smoothParts') {
        return overload.splice(9)
    }
    if (choice === 'hardParts') {
       return overload.splice(0);
    };
    return
}

let z:any = basicOverload(95,125,130)


let usedUnits: {}[] = [];
let currentUnit: {}[]|{} = [];
//progression of freeFall plan 
const freeFallProgression = (load: {}[]|[]) => {
    usedUnits.push(load[0])
    let shiftingArray = load.shift();
    return shiftingArray;
}

freeFallProgression(z)
console.log(usedUnits)
console.log(z)


let paidTwiceArray: any = []
let paidTwiceArray1: any = []
let paidTwiceArray2: any = []

// shuffle so no element repeats itself
// playDice needs to check if next 2 elements don't have the same name
const playDice = (arr:any) => { 
 
    for (let i = arr.length - 1; i > 0; i--) {
        let j =  Math.floor(Math.random() * Math.floor(arr.length - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];   
    
    }
    return arr;
}

// const playTwice = (arr: any|{}[]) => {
   
//     arr.filter((element: any,index: number) => { 
//         if (element(index).mainExercise !== element(index +1).mainExercise) {
//             paidTwiceArray.push(element)
//         } else {
//             paidTwiceArray2.push(element)
//         }
//     })
    
//     console.log(paidTwiceArray,paidTwiceArray2);
// }

let nonrepeating: {}[] = []
playDice(z)


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
