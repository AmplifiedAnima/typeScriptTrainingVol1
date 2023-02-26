
//intensity

type num = number|number[]|[number]|[number[]]|{}|{}[]|[{}]|string|string[]|[string]|[string[]];

type stringOrStrings = string | string[]


class MainExercise {
    mainExercise: string | string[]
    load: num;

    typeOfMovement?: string | string[];
    exerciseVariation?: string | string[];
    MusclesInvolvedInExercise?: string | string[];
    typesOfMovement?: string | string[];
    constructor(mainExercise: string, load: num,MusclesInvolvedInExercise?: string | string[], typesOfMovement?: string | string[]) {
        this.mainExercise = mainExercise;
        this.load = load;
        this.MusclesInvolvedInExercise = MusclesInvolvedInExercise;
        this.typesOfMovement = typesOfMovement;
    }
}

class AccesoryExercise {

    accesory: string | string[];
    load: num;
    MusclesInvolvedInExercise?: string | string[]
    pauses?: num;
    TypesOfMovement?: string | string[];

    constructor(accesory:string, load:num, MusclesInvolvedInExercise?: string | string[], TypesOfMovement?: string | string[]) {
        this.accesory = accesory, 
        this.load = load
        this.MusclesInvolvedInExercise = MusclesInvolvedInExercise;
        this.TypesOfMovement = TypesOfMovement;
     
    }
} 
class MetabolicStress {

    activity: string | string[];
    metabolicLoad: num;
    distance: num;
    duration: num;
    
    constructor( activity: string, metabolicLoad: num ,duration: num, distance:num ) {
        this.activity = activity, 
        this.metabolicLoad = metabolicLoad,
        this.duration = duration,
        this.distance = distance
    }
}


class MusclesInvolvedInExercise {
    muscleGroupsEngaged: string | string[] | []

    constructor(muscleGroupsEngaged: string | string[]) {
        this.muscleGroupsEngaged = muscleGroupsEngaged
    }
}
// create a pool so user can drag and drop items into the projection/plan
//Accesories Default for average bloke 

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

const dataFromFunc: HTMLElement| null = document.getElementById('kuku')
// shuffle so no element repeats itself
// playDice needs to check if next 2 elements don't have the same name

const playDice = (arr:any) => { 
 
    for (let i = arr.length - 1; i > 0; i--) {
        let j =  Math.floor(Math.random() * Math.floor(arr.length - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];   
    
    }
    return arr;
}


form4Load4?.addEventListener('submit', (e)=> {
    e.preventDefault()

    const squatLoad: number = loadTheLoad(Math.round(Number(reps4LoadSquat?.value)), Number(intensity4Squat?.value))
    const deadliftLoad: number = loadTheLoad(Math.round(Number(reps4Deadlift?.value)), Number(intensity4Deadlift?.value))
    const benchLoad: number = loadTheLoad(Math.round(Number(reps4Bench?.value) ), Number(intensity4Bench?.value))
    
    const repMax4Squat = squatLoad.toString()
    const repMax4Deadlift = deadliftLoad.toString()
    const repMax4Bench = benchLoad.toString()

    const array: {}[] = basicOverload(Math.round(squatLoad),Math.round(deadliftLoad),Math.round(benchLoad))

    if (
        intensity4Squat?.value == '' && reps4LoadSquat?.value == ''
        && intensity4Deadlift?.value == '' &&  reps4Deadlift?.value == '' 
        && intensity4Bench?.value == '' && reps4Bench?.value == ''
    ) 
    // if (intensity4Deadlift?.value === '' && reps4Deadlift?.value === ''|| Number(reps4Deadlift?.value))

    console.log(array)

   
    const Projection: string[]|string|any= array.map((element: any, index: number ) => {

        let firstExerciseLoad: number[] = element[0].load[0]
        let secondExerciseLoad: number[] = element[0].load[1]
        let thirdExerciseLoad: number[] = element[0].load[2]
        let firstExerciseLoadAccesory: number[] = element[1][0].load
        let secondExerciseLoadAccesory: number[] = element[1][1].load
        let thirdExerciseLoadAccesory: number[] = element[1][2].load

        const volumeTrackerMini = (overload: any) => {
            let totalExerciseLoad:any = overload[0] * overload[1] * overload[2]
            // key to counting load
                return Math.round(totalExerciseLoad)
            // sum it up with  .reduce((acc: number,cur: number) => acc + cur);
        }

        console.log(volumeTrackerMini(firstExerciseLoad))
        let table: string = ''
        table +=`  
                <tr>
                <th><h4>${index+1}. Training unit</h4></th>
                </tr>
                <tr>
                <td><h4> Main exercise : ${element[0].mainExercise}<h4></td>
                <td>               <small> Muscles involved : ${element[0].MusclesInvolvedInExercise}</small>
                </td>
 
                </tr>
                <tr>
                </tr>
                <td><h5>Intensity <h5></td>
                <td><h5>Sets <h5></td>
                <td></td>
                <td><h5>Reps <h5></td>
                <tr>
                <td><h4>${Math.round(firstExerciseLoad[0])} kg </h4></td>
                <td><h5>${firstExerciseLoad[1]}</h5></td>
                <td></td>
                <td><h5>${firstExerciseLoad[2]}</h5></td>
                </tr>
                <tr>
                <td><h4>${Math.round(secondExerciseLoad[0])} kg </h4></td>
                <td><h5>${secondExerciseLoad[1]}</h5></td>
                <td></td>
                <td><h5>${secondExerciseLoad[2]}</h5></td>
                </tr>
                <tr>
                <td><h4>${Math.round(thirdExerciseLoad[0])} kg </h4></td>
                <td><h5>${thirdExerciseLoad[1]}</h5></td>
                <td></td>
                <td><h5>${thirdExerciseLoad[2]}</h5></td>
                </tr>
                <tr>
                <td><h4> Accesory I: ${element[1][0].accesory} </h4></td>
                <td><h5>${firstExerciseLoadAccesory[0]}</h5></td>
                <td></td>
                <td><h5>${firstExerciseLoadAccesory[1]}</h5></td>
                <td><small> Muscles involved : ${element[1][0].MusclesInvolvedInExercise} </small></td>
                </tr>   
                <tr>
                <td><h4> Accesory II: ${element[1][1].accesory} </h4></h4></td>
                <td><h5>${secondExerciseLoadAccesory[0]}</h5></td>
                <td></td>
                <td><h5>${secondExerciseLoadAccesory[1]}</h5></td>
                <td><small> Muscles involved : ${element[1][1].MusclesInvolvedInExercise} </small></td>
                </tr>
                <tr>
                <td><h4> Accesory III: ${element[1][2].accesory} </h4> </td>
                <td><h5>${thirdExerciseLoadAccesory[0]}</h5></td>
                <td></td>
                <td><h5>${thirdExerciseLoadAccesory[1]}</h5></td>
                <td><small> Muscles involved : ${element[1][1].MusclesInvolvedInExercise} </small></td>
                </tr>
                <td></td>
                <tr>

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

const lockAndLoadForAccesories = () => {
}

let load: num;
let intensity: num;
let newMainExercise: MainExercise;

const progress4Strength = (mainExercise: string, repMax: number, int80plus: boolean, int88plus: boolean, int95plus: boolean, MusclesInvolvedInExercise: string | string[] ,
    typesOfMovement: string | string[]): MainExercise => {
    // this needs to be extended
    if (int80plus == true && int88plus == false && int95plus == false) {

        load = lockAndLoad([repMax * 0.8 ,repMax * 0.825, repMax * 0.85],5,5)
        return newMainExercise = new MainExercise(mainExercise, load , MusclesInvolvedInExercise , typesOfMovement);
    }
    if (int80plus == false && int88plus == true && int95plus == false) {

        load = lockAndLoad([repMax * 0.85 ,repMax * 0.875, repMax * 0.9],6,3)
        return newMainExercise = new MainExercise(mainExercise, load,MusclesInvolvedInExercise, typesOfMovement);
    }
    if (int80plus == false && int88plus == false && int95plus == true) {
    
        load = lockAndLoad([repMax * 0.875, repMax * 0.9, repMax * 0.925],7,2);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    return newMainExercise;
};

const progress4Volume = (mainExercise: string, repMax: number, int65plus: boolean, int70plus: boolean, int75plus: boolean , MusclesInvolvedInExercise: string | string[],
    typesOfMovement: string | string[] ) => {
    // These are default !!
    if (int65plus == true && int70plus == false && int75plus == false) {

        load = lockAndLoad([repMax * 0.65, repMax * 0.6750, repMax * 0.70],3,12);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    if (int65plus == false && int70plus == true && int75plus == false) {

        load = lockAndLoad([repMax * 0.7, repMax * 0.7250, repMax * 0.75],3,10)
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    if (int65plus == false && int70plus == false && int75plus == true) {

        load = lockAndLoad([repMax * 0.75, repMax * 0.7750, repMax * 0.8],3,8)
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    return newMainExercise;
};

// find a way to randomize it if user needs
// find possibility to allow user to fuck around different types of loading like triphasic (gpp , acc , peak phases)
// find a way for user to try again with plan/projection in seconds
// first you have to connect exercises to specific muscle groups to make sense out of randomization
// need 2 categorize data for beginner/ intermediate
// categorize exercises by appending a them a property of muscle targeted/involed in exercise
// exercises names , and load have to be mutable
let squatExerciseMain = new MainExercise('Squat',[],['calves', 'tibialis', 'quadriceps','glutes', 'lowerback', 'abdominals'],['squat', 'bilateral'])
let deadliftExerciseMain = new MainExercise('Deadlift',[],['calves', 'hamstrings', 'lowerback', 'glutes', 'abdominals', 'arms', 'forearms'],['hinge', 'bilateral'])
let benchPressExerciseMain = new MainExercise('Benchpress',[],['forearm', 'arms', 'upperbody', 'chest', 'shoulders'],['push', 'bilateral'])

let mainExercises = [
    squatExerciseMain,
    deadliftExerciseMain,
    benchPressExerciseMain
]
console.log(mainExercises)

let lowerBodyUnilateral = [
    //unilateral
    new AccesoryExercise('Bulgarian split squat',[2,10],['quadriceps', 'calves', 'tibialis'],['lunge','unilateral']),
    new AccesoryExercise('Lunge backwards',[2,10],['quadriceps', 'hamstrings', 'calves', 'tibialis'],['lunge','unilateral']),
    new AccesoryExercise('Lunge forward',[2,10],['quadriceps', 'hamstrings', 'calves', 'tibialis'],['lunge','unilateral']),
    new AccesoryExercise('Lunge lateral (partial cossack squat)',[3,10],['quadriceps', 'hamstrings', 'calves', 'tibialis'],['lunge','unilateral']),
    new AccesoryExercise('Cossack squat full ROM',[3,10],['quadriceps', 'hamstrings', 'calves', 'tibialis'],['lunge','unilateral']),
    new AccesoryExercise('Single-legged romanian deadlift',[2,10],['hamstrings', 'calves', 'tibialis'],['hinge','unilateral']),
    new AccesoryExercise('Staggered-stance romanian deadlift',[2,10],['hamstrings', 'quadriceps', 'calves', 'tibialis'],['hinge','unilateral']),
    new AccesoryExercise('Hip thrust - one side only',[2,10],['glutes', 'hamstrings', 'calves', 'tibialis'],['hinge','unilateral']), 
    new AccesoryExercise('Box step-ups',[3,10],['quadriceps', 'hamstrings', 'calves', 'tibialis'],['hinge','unilateral']),
    new AccesoryExercise('Single leg squats',[2,10],['quadriceps', 'calves', 'tibialis'],['hinge','unilateral']),
    new AccesoryExercise('Poliquin step-up',[2,10],['quadriceps', 'hamstrings', 'calves', 'tibialis'],['hinge','unilateral']),
]

const squatMusclesInvolvement = ['quadriceps', 'calves', 'tibialis', 'glutes', 'lowerback', 'abdominals']
const deadliftMusclesInvolvment = ['hamstrings', 'glutes', 'lowerback', 'abdominals', 'calves', 'tibialis', 'traps']

let lowerBodyBilateral = [

    new AccesoryExercise('Back squat',[3,10], squatMusclesInvolvement,['squat', 'bilateral']),
    new AccesoryExercise('Front squat',[3,10], squatMusclesInvolvement,['squat', 'bilateral']),
    new AccesoryExercise('Box squat',[3,10], squatMusclesInvolvement,['squat', 'bilateral']),
    new AccesoryExercise('Pin squat',[3,10],  squatMusclesInvolvement,['squat', 'bilateral']),
    new AccesoryExercise('Hack squat',[3,10],  squatMusclesInvolvement,['squat', 'bilateral']),
    new AccesoryExercise('Overhead squat',[3,10], ['quadriceps', 'calves', 'tibialis', 'glutes', 'lowerback', 'abdominals', 'upperbody', 'arms', 'shoulders', 'forearm'],['squat', 'bilateral']),
    new AccesoryExercise('Hip thrust',[3,10],['glutes','hamstrings','calves','tibialis'],['hinge','unilateral']),
]


let legsSmallExercises = [
    new AccesoryExercise('Calf raises',[3,10], ['calves', 'tibialis'],['extension','flexion']),
    new AccesoryExercise('Single-leg Calf raises',[4,10], ['calves', 'tibialis'],['extension','flexion']),
    new AccesoryExercise('Tibialis raises',[3,10],['tibialis', 'calves'],['extension','flexion']),
    new AccesoryExercise('Copenhagen adductor raise',[2,10],['adductor', 'abdominals'],['extension','flexion']),
]

let abdomenAndLowerback = [
    //core
    new AccesoryExercise('Classic deadlift',[3,10],deadliftMusclesInvolvment,['hinge', 'bilateral']),
    new AccesoryExercise('Sumo deadlift',[3,10],['quadriceps', 'hamstrings', 'glutes', 'lowerback', 'abdominals', 'calves', 'tibialis', 'traps'],['hinge', 'bilateral']),
    new AccesoryExercise('Romanian deadlift',[3,10],deadliftMusclesInvolvment,['hinge', 'bilateral']),
    new AccesoryExercise('Trapbar deadlift',[3,10]),['quadriceps', 'hamstrings', 'glutes', 'lowerback', 'abdominals', 'calves', 'tibialis', 'traps'],['hinge', 'bilateral'],
]
    
let gymnasticsBack = [        
    new AccesoryExercise('Russian twists',[3,20],['abdominals', 'obliques'], ['rotational']),
    new AccesoryExercise('Side crunch',[4,20],['abdominals', 'obliques'], ['flexion']),
    new AccesoryExercise('Sit-ups',[3,20],['abdominals','lowerback'], ['flexion']),
    new AccesoryExercise('Toes to bar',[3,10],['abdominals','lowerback','arms','forearm'], ['flexion']),
    new AccesoryExercise('Skin the cat',[3,5],['abdominals','lowerback','arms','forearm'], ['flexion'])
]  

let pushUpExerciseBodyWeight = [
    new AccesoryExercise('Push-ups',[3,10],['forearm', 'arms', 'upperbody', 'shoulders',],['push', 'bilateral'])
]

let pullExercisesBodyweight = [
    //static arms
    //bilateral
   
    new AccesoryExercise('Pull-ups',[3,10],['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
    new AccesoryExercise('Pull-ups neutral grip',[3,10],['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
    new AccesoryExercise('Commando Pull-ups',[3,10],['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
    new AccesoryExercise('Chin-ups',[3,10],['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
]


let pullExercisesButMoreAccesible = [
    new AccesoryExercise('Face cable pull',[3,10],['forearm','arms','upperbody','shoulders'],['pull', 'bilateral']),
    new AccesoryExercise('Lat pulldown',[3,10],['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
    new AccesoryExercise('Barbell Bent Over Row',[3,10], ['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
    new AccesoryExercise('Dumbbell Bent Over Row',[3,10],['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
    new AccesoryExercise('One Arm Dumbbell Row',[2,10],['forearm','arms','upperback','shoulders'],['pull', 'unilateral']),
    new AccesoryExercise('Pendley Row',[3,10],['forearm','arms','upperback','shoulders'],['pull', 'bilateral']),
]

let pushExercises = [
    new AccesoryExercise('Dips',[3,10],['forearm','arms','upperbody','shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Dumbell floor press',[3,10],['forearm','arms','upperbody','shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Barbell floor press',[3,10],['forearm','arms','upperbody','shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Benchpress',[3,10],['forearm', 'arms', 'upperbody', 'chest', 'shoulders'],['push', 'bilateral'])
]

let isometricsAndHangs = [
    new AccesoryExercise('Deadhangs',[3,10]),
    new AccesoryExercise('Forearm plank',[3,20]),
    new AccesoryExercise('Side-plank',[3,20]),
    new AccesoryExercise('Reverse gymnastic plank',[3,10]),
    new AccesoryExercise('Push-up position hold',[3,20]),
    new AccesoryExercise('Bridge',[3,20])

]
let armsHypetrophy = [
    // unilateral/bilateral
    new AccesoryExercise('Bicep curls',[3,10],['forearm','biceps'], ['flexion','isolated','bilateral']),
    new AccesoryExercise('Bicep curls neutral grip dumbells',[3,10], ['forearm','biceps'],['flexion','isolated','bilateral']),
    new AccesoryExercise('Skull crushers',[3,10], ['forearm','triceps'], ['flexion','isolated','bilateral']),
    new AccesoryExercise('Wrist curls and extensions',[3,10]),
]

let pressBilateral = [
    //bilateral
    new AccesoryExercise('Overhead press barbell',[3,10], ['forearm', 'arms', 'upperbody', 'shoulders'] ,['push', 'bilateral']),
    new AccesoryExercise('Overhead dumbell press',[3,10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Overhead kettlebell press',[3,10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral'])
   ]

let pressUnilateral = [
    //bilateral
    new AccesoryExercise('Overhead press barbell',[3,10],['forearm', 'arms', 'upperbody', 'shoulders'] ,['push', 'unilateral']),
    new AccesoryExercise('Overhead Dumbell press',[3,10],['forearm', 'arms', 'upperbody', 'shoulders'] ,['push', 'unilateral']),
    new AccesoryExercise('Overhead Kettlebell press',[3,10],['forearm', 'arms', 'upperbody', 'shoulders'] ,['push', 'unilateral']),
   ]
//
let upperBodySmallExercises = [

    new AccesoryExercise('Shrugs',[3,20],['traps','forearm']),
    new AccesoryExercise('Lateral dumbell raise',[3,10],['shoulders']),
    new AccesoryExercise('Gate cable pulls',[3,10],['chest']),
    new AccesoryExercise('Scapulae depression and elevation while hanging',[3,10],['upperbody','scapulae'],['isometric','bilateral']),
    new AccesoryExercise('Scapulae protraction and retraction while in push-up position',[3,10],['upperbody','scapulae'],['isometric','bilateral'])
]

let traversalAccesories = [
    new AccesoryExercise('Farmer carry',[3,10],['legs','lowerbody', 'obliques','abdominals','arms'],['traversal','bilateral','carry']),
    new AccesoryExercise('Sled drag push',[3,10]),
    new AccesoryExercise('Sled drag pull',[3,10]),
]

let plyometricLoad = [
    new AccesoryExercise('Jump vertical',[3,10]),
    new AccesoryExercise('Jump forward',[3,10]),
    new AccesoryExercise('Lateral side to side lateral jump',[3,10]),
    new AccesoryExercise('Box jump',[3,3]),
    new AccesoryExercise('Box drops',[3,10]),
]

let balisticLoad = [
    new AccesoryExercise('Ball throw - floor',[3,10]),
    new AccesoryExercise('Ball throw - front',[3,10]),
    new AccesoryExercise('Ball throw - front rotation',[3,10]),
    new AccesoryExercise('Ball throw - upwards',[3,10]),
    new AccesoryExercise('Ball throw - floor side 2 side',[3,10]),
  
]
let jointConditioningFRC = [

    new AccesoryExercise('Hip full ROM rotations lying on the side',[2,10]),
    new AccesoryExercise('Hip full ROM rotations while standing',[2,10]),
]
let hardstyleSfgSpecific = [
//sfg - kettlebell specific
    new AccesoryExercise('Swing',[3,10]),
    new AccesoryExercise('One arm swing',[3,10]),
    new AccesoryExercise('Turkish get-up',[3,10]),
    new AccesoryExercise('Bent press',[3,10]),
    new AccesoryExercise('Windmill',[3,10]),
    new AccesoryExercise('One arm kettlebell snatch',[3,10]),
    new AccesoryExercise('One arm dumbell snatch',[3,10]),
] 
let olympicWeightlifting = [

    new AccesoryExercise('Snatch',[3,3]),
    new AccesoryExercise('Power snatch',[3,20]),
    new AccesoryExercise('Hang snatch',[3,3]),
    new AccesoryExercise('Drop snatch',[3,3]),
    new AccesoryExercise('Clean and jerk',[3,3]),
    new AccesoryExercise('Power clean',[3,3]),
]
const filter4Beginner = () => {
    // I can filter them through properties of muscles , movement type , involvement of load outside of BW
    // define bodyweight more
    //define heartrate etc.
}
// this could be filtered through some type of user variable
const randomPackLegsAsBasic = [playDice(lowerBodyUnilateral)[0],playDice(lowerBodyBilateral)[0],playDice(legsSmallExercises)[0]]
const randomPackUpperBodyAndAbdomen = [playDice(pressBilateral)[0],playDice(abdomenAndLowerback)[0],playDice(armsHypetrophy)[0]]
const randomPackUpperBodyChestAndArms = [playDice(pullExercisesBodyweight)[0],playDice(pullExercisesButMoreAccesible)[0],playDice(pushExercises)[0]]


// This has to be learned and improved upon 
// try to classify this as upperbody compound, lowerbody compound, leg compound
const basicOverload = (Squat: number, Bench: number, Deadlift: number): {}[] => {

    let overLoadedArray = [  
    // litle to medium/optimal load intensities/volume
        [progress4Strength(`${squatExerciseMain.mainExercise}`, Squat, true, false, false, `${squatExerciseMain.MusclesInvolvedInExercise}`,`${squatExerciseMain.typesOfMovement}`),randomPackLegsAsBasic],
        [progress4Volume(`${benchPressExerciseMain.mainExercise}`, Bench, true, false, false,`${benchPressExerciseMain.MusclesInvolvedInExercise}`,`${benchPressExerciseMain.typesOfMovement}`),randomPackUpperBodyChestAndArms],
        [progress4Strength(`${deadliftExerciseMain.mainExercise}`, Deadlift, true, false, false,`${deadliftExerciseMain.MusclesInvolvedInExercise}`,`${deadliftExerciseMain.typesOfMovement}`),randomPackUpperBodyAndAbdomen],

        [progress4Volume(`${squatExerciseMain.mainExercise}`,Squat, false, true, false,`${squatExerciseMain.MusclesInvolvedInExercise}`,`${squatExerciseMain.typesOfMovement}`),randomPackLegsAsBasic],
        [progress4Strength(`${benchPressExerciseMain.mainExercise}`, Bench, true, false, false,`${benchPressExerciseMain.MusclesInvolvedInExercise}`,`${benchPressExerciseMain.typesOfMovement}`),randomPackUpperBodyChestAndArms],
        [progress4Volume(`${deadliftExerciseMain.mainExercise}`, Deadlift, false , true ,false,`${deadliftExerciseMain.MusclesInvolvedInExercise}`,`${deadliftExerciseMain.typesOfMovement}`),randomPackUpperBodyAndAbdomen],
     
        [progress4Strength(`${squatExerciseMain.mainExercise}`, Squat, false, true ,false, `${squatExerciseMain.MusclesInvolvedInExercise}`,`${squatExerciseMain.typesOfMovement}`),randomPackLegsAsBasic],
        [progress4Volume(`${benchPressExerciseMain.mainExercise}`, Bench, false, true, false,`${benchPressExerciseMain.MusclesInvolvedInExercise}`,`${benchPressExerciseMain.typesOfMovement}`),randomPackUpperBodyChestAndArms],
        [progress4Strength(`${deadliftExerciseMain.mainExercise}`, Deadlift, false, true, false,`${deadliftExerciseMain.MusclesInvolvedInExercise}`,`${deadliftExerciseMain.typesOfMovement}`), randomPackUpperBodyAndAbdomen],
// middle to overload tier / hard/optimal
        [progress4Volume(`${squatExerciseMain.mainExercise}`, Squat, false , false, true, `${squatExerciseMain.MusclesInvolvedInExercise}`,`${squatExerciseMain.typesOfMovement}`),randomPackLegsAsBasic],
        [progress4Strength(`${benchPressExerciseMain.mainExercise}`, Bench, false, true, false, `${benchPressExerciseMain.MusclesInvolvedInExercise}`,`${benchPressExerciseMain.typesOfMovement}`), randomPackUpperBodyChestAndArms],
        [progress4Volume(`${deadliftExerciseMain.mainExercise}`, Deadlift, false, false, true, `${deadliftExerciseMain.MusclesInvolvedInExercise}`,`${deadliftExerciseMain.typesOfMovement}`),randomPackUpperBodyAndAbdomen],
     
        [progress4Strength(`${squatExerciseMain.mainExercise}`, Squat, false, false, true,`${squatExerciseMain.MusclesInvolvedInExercise}`,`${squatExerciseMain.typesOfMovement}`),randomPackLegsAsBasic],
        [progress4Volume(`${benchPressExerciseMain.mainExercise}` , Bench, false, false, true,`${benchPressExerciseMain.MusclesInvolvedInExercise}`,`${benchPressExerciseMain.typesOfMovement}`),randomPackUpperBodyChestAndArms],
        [progress4Strength(`${deadliftExerciseMain.mainExercise}`, Deadlift, false, false, true,`${deadliftExerciseMain.MusclesInvolvedInExercise}`,`${deadliftExerciseMain.typesOfMovement}`),randomPackUpperBodyAndAbdomen],

        [progress4Volume(`${squatExerciseMain.mainExercise}`, Squat, true , false, false,`${squatExerciseMain.MusclesInvolvedInExercise}`,`${squatExerciseMain.typesOfMovement}`),randomPackLegsAsBasic],
        [progress4Strength(`${benchPressExerciseMain.mainExercise}`, Bench, false, false, true,`${benchPressExerciseMain.MusclesInvolvedInExercise}`,`${benchPressExerciseMain.typesOfMovement}`),randomPackUpperBodyChestAndArms],
        [progress4Volume(`${deadliftExerciseMain.mainExercise}`, Deadlift,  true, false, false,`${deadliftExerciseMain.MusclesInvolvedInExercise}`,`${deadliftExerciseMain.typesOfMovement}`),randomPackUpperBodyAndAbdomen],
        ]

    return overLoadedArray;
};

let z = basicOverload(100,120,130)
console.log(z)

const chooseWhichFirst = (overload:{}[]|[], choice: string) => {

    if (choice === 'smoothParts') {
        return overload.splice(9)
    }
    if (choice === 'hardParts') {
       return overload.splice(0);
    };
    return
}

let usedUnits: {}[] = [];
let currentUnit: {}[]|{} = [];
//progression of freeFall plan 
const freeFallProgression = (load: {}[]|[]) => {
    usedUnits.push(load[0])
    let shiftingArray = load.shift();
    return shiftingArray;
}

let paidTwiceArray: any = []
let paidTwiceArray1: any = []
let paidTwiceArray2: any = []


// elaborate on tracker and create logic for main exercises ,accesory and metabolic stress
const trackTheVolume = (overload: {}[]) => {
    let totalLoadExerciseValue: number;
    let totalOfLoad: number[] = [];
    
    overload.filter((e: any) => {
        totalLoadExerciseValue = e[0].load[0][0] * e[0].load[0][1] * e[0].load[0][2]
        totalOfLoad.push(totalLoadExerciseValue)
    });
    return totalOfLoad.reduce((acc: number,cur: number) => acc + cur);
};
console.log(trackTheVolume(z))


// all volume units
const chooseFromVolume = (overload: {}[]) => {
    const highestVol = overload.filter((a: any) => {
        return a + a 
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

console.log(chooseFromVolume(z))