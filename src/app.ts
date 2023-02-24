
//intensity

type num = number|number[]|[number]|[number[]]|{}|{}[]|[{}]|string|string[]|[string]|[string[]];

type stringOrStrings = string | string[]

// building block for training unit

class TrainingUnit {

    MainExercise: MainExercise;
    Accesories: AccesoryExercise[];
    MetabolicStress?: MetabolicStress;

    constructor( MainExercise: MainExercise, Accesories: AccesoryExercise[], MetabolicStress: MetabolicStress ) {
        this.MainExercise = MainExercise;
        this.Accesories = Accesories;
        this.MetabolicStress = MetabolicStress
    }
}

class MainExercise {
    mainExercise: string | string[]
    load: num;

    typeOfMovement?: TypesOfMovement;
    exerciseVariation?: ExerciseVariations;

    constructor(mainExercise: string, load: num) {
        this.mainExercise = mainExercise;
        this.load = load;

    }
}

class AccesoryExercise {

    accesory: string | string[];
    load: num;
    muscleGroupEngaded?: MuscleGroups | MuscleGroups[];
    pauses?: num;
    TypesOfMovement?: TypesOfMovement;

    constructor(accesory:string, load:num, muscleGroupEngaded?: MuscleGroups | MuscleGroups[], TypesOfMovement?: TypesOfMovement) {
        this.accesory = accesory, 
        this.load = load
        this.muscleGroupEngaded = muscleGroupEngaded;
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

class MuscleGroups {
 
    calves?: stringOrStrings;
    tibialis?: stringOrStrings;
    hamstrings?: stringOrStrings;
    quadriceps?: stringOrStrings;
    glutes?: stringOrStrings;

    abdominals?: stringOrStrings;
    obliques?: stringOrStrings;
    lowerback?: stringOrStrings;
 
    chest?: stringOrStrings;
    upperbackAndScapula?: stringOrStrings;
    shoulders?: stringOrStrings;
    biceps?: stringOrStrings;
    triceps?: stringOrStrings;
    forearm?: stringOrStrings;
 
    public constructor(
        calves?: stringOrStrings,  tibialis?: stringOrStrings, hamstrings?: stringOrStrings, quadriceps?: stringOrStrings, glutes?: stringOrStrings,
        abdominals?: stringOrStrings, obliques?: stringOrStrings, lowerback?: stringOrStrings,
        chest?: stringOrStrings,     upperbackAndScapula?: stringOrStrings, shoulders?: stringOrStrings,
        biceps?: stringOrStrings, triceps?: stringOrStrings, forearm?: stringOrStrings) {
            //legs
            this.calves = calves
            this.tibialis = tibialis;
            this.hamstrings = hamstrings;
            this.quadriceps = quadriceps;
            this.glutes = glutes;
            //trunk (***could be called core)
            this.abdominals = abdominals;
            this.obliques = obliques;
            this.lowerback = lowerback;
            //upperbody
            this.chest = chest;
            this.upperbackAndScapula = upperbackAndScapula;
            this.shoulders = shoulders;
            //arms
            this.biceps = biceps;
            this.triceps = triceps;
            this.forearm = forearm;
        }
    
}

class MusclesInvolvedInExercise {
    muscleGroupsEngaged: MuscleGroups| MuscleGroups[]

    constructor(muscleGroupsEngaged: MuscleGroups | MuscleGroups[]) {
        this.muscleGroupsEngaged = muscleGroupsEngaged
    }
}
class TypesOfTraining { 

    strength: string;
    speed: string;
    power: string;
    agility?: string 
    anaerobicCapacity: string;
    aerobicCapacity: string;

    constructor(
        strength: string,
        speed: string,
        power: string, 
        anaerobicCapacity: string,
        aerobicCpacity: string) {

        this.strength = strength;
        this.speed = speed;
        this.power = power;
        this.anaerobicCapacity = anaerobicCapacity;
        this.aerobicCapacity = aerobicCpacity;
    }
}

class TypesOfMovement { 

    standing: string;
    bilateral: string;
    unilateral: string;
    lateral: string;
    rotational: string;
    traversal: string;
    plyometric: string;
    balistic: string;


    constructor(
        standing: string, 
        bilateral: string, unilateral: string, lateral:string,
        rotational: string, 
        traversal: string,
        plyometric: string, balistic: string ) {

        this.standing = standing
        this.bilateral = bilateral;
        this.unilateral = unilateral;
        this.lateral = lateral;
        this.rotational = rotational;
        this.traversal = traversal;
        this.plyometric = plyometric;
        this.balistic = balistic;
    }
}

class ExerciseVariations {

    isometrics: string; 
    prolongedEccentricPhase: string;
    prolongedConentricPhase: string;
    pausesDuringRep: string;
    oneAndHalfRep: string;
    explosive: string;

    constructor(
        isometrics: string, 
        prolongedEccentricPhase: string,
        prolongedConentricPhase: string,
        pausesDuringRep: string,
        oneAndHalfRep: string,
        explosive: string ) {

            this.isometrics = isometrics;
            this.prolongedEccentricPhase = prolongedEccentricPhase;
            this.prolongedConentricPhase = prolongedConentricPhase;
            this.pausesDuringRep = pausesDuringRep;
            this.oneAndHalfRep = oneAndHalfRep;
            this.explosive = explosive;
        }
}

class Tools4Exercises {
    // barbells 
    normalBarbell: string;
    trapBar: string;
    openTrapBar: string;
    cumberedBar: string;
    safetyBar: string;
    //Landmine
    landmineHalfOfBarbell: string;
    //
    dumbBells: string;
    kettleBells: string;
    //
    platesAndBumpers: string;
    bulgarianBag: string;
    balls: string;
    //
    gymnasticRings: string;
    TRX: string;
    ropes: string;
    resistanceBand: string;
    // 
    slantboard: string;

    constructor(

        normalBarbell: string, trapBar: string, openTrapBar: string, cumberedBar: string, safetyBar: string,
        landmineHalfOfBarbell: string,
        dumbBells: string, kettleBells: string, platesAndBumpers: string,
        bulgarianBag: string, balls: string, gymnasticRings: string, TRX: string, ropes: string, resistanceBand: string,
        slantboard: string ) {

        this.normalBarbell = normalBarbell;
        this.trapBar = trapBar;
        this.openTrapBar = openTrapBar;
        this.cumberedBar = cumberedBar;
        this.safetyBar = safetyBar;
        this.landmineHalfOfBarbell = landmineHalfOfBarbell;
        this.dumbBells = dumbBells;
        this.kettleBells = kettleBells;
        this.platesAndBumpers = platesAndBumpers;
        this.bulgarianBag = bulgarianBag;
        this.balls = balls;
        this.gymnasticRings = gymnasticRings;
        this.TRX = TRX;
        this.ropes = ropes;
        this.resistanceBand = resistanceBand;
        this.slantboard = slantboard;
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
                <td><h4> Accesory I: ${element[1][0].accesory}</h4></td>
                <td><h5>${firstExerciseLoadAccesory[0]}</h5></td>
                <td></td>
                <td><h5>${firstExerciseLoadAccesory[1]}</h5></td>
                </tr>   
                <tr>
                <td><h4> Accesory II: ${element[1][1].accesory} </h4></td>
                <td><h5>${secondExerciseLoadAccesory[0]}</h5></td>
                <td></td>
                <td><h5>${secondExerciseLoadAccesory[1]}</h5></td>
                </tr>
                <tr>
                <td><h4> Accesory III: ${element[1][2].accesory} </h4></td>
                <td><h5>${thirdExerciseLoadAccesory[0]}</h5></td>
                <td></td>
                <td><h5>${thirdExerciseLoadAccesory[1]}</h5></td>
                <td></td>
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

const progress4Strength = (mainExercise: string, repMax: number, int80plus: boolean, int88plus: boolean, int95plus: boolean): MainExercise => {
    // this needs to be extended
    if (int80plus == true && int88plus == false && int95plus == false) {

        load = lockAndLoad([repMax * 0.8 ,repMax * 0.825, repMax * 0.85],5,5)
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == true && int95plus == false) {

        load = lockAndLoad([repMax * 0.875 ,repMax * 0.9, repMax * 0.925],6,3)
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == false && int95plus == true) {
    
        load = lockAndLoad([repMax * 0.90, repMax * 0.925, repMax * 0.95],7,2);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    return newMainExercise;
};

const progress4Volume = (mainExercise: string, repMax: number, int65plus: boolean, int70plus: boolean, int75plus: boolean) => {
    // These are default !!
    if (int65plus == true && int70plus == false && int75plus == false) {

        load = lockAndLoad([repMax * 0.65, repMax * 0.6750, repMax * 0.70],3,12);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == true && int75plus == false) {

        load = lockAndLoad([repMax * 0.7, repMax * 0.7250, repMax * 0.75],3,10)
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == false && int75plus == true) {

        load = lockAndLoad([repMax * 0.75, repMax * 0.7750, repMax * 0.8],3,8)
        return newMainExercise = new MainExercise(mainExercise, load);
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

let mainExercises = [
    new AccesoryExercise('Squat',[3,10],new MuscleGroups()),
    new AccesoryExercise('Deadlift',[3,10]),
    new AccesoryExercise('Benchpress',[3,10])
]
console.log(mainExercises)

let lowerBodyUnilateral = [
    //unilateral
    new AccesoryExercise('Bulgarian split squat',[4,10]),
    new AccesoryExercise('Lunge backwards',[4,10]),
    new AccesoryExercise('Lunge forward',[4,10]),
    new AccesoryExercise('Lunge lateral (partial cossack squat)',[4,10],),
    new AccesoryExercise('Cossack squat full ROM',[4,10]),
    new AccesoryExercise('Single-legged romanian deadlift',[4,10]),
    new AccesoryExercise('Staggered-stance romanian deadlift',[4,10]),
    new AccesoryExercise('Hip thrust - one side only',[3,10]),
    new AccesoryExercise('Box step-ups',[4,10]),
    new AccesoryExercise('Single leg squats',[4,10]),
    new AccesoryExercise('Poliquin step-up',[4,10])
]

let lowerBodyBilateral = [

    new AccesoryExercise('Back squat',[3,10]),
    new AccesoryExercise('Front squat',[3,10]),
    new AccesoryExercise('Box squat',[3,10]),
    new AccesoryExercise('Pin squat',[3,10]),
    new AccesoryExercise('Hack squat',[3,10]),
    new AccesoryExercise('Overhead squat',[3,10]),
    new AccesoryExercise('Hip thrust',[3,10]),
    new AccesoryExercise('',[3,10]),
]


let legsSmallExercises = [
    new AccesoryExercise('Calf raises',[3,10]),
    new AccesoryExercise('Single-leg Calf raises',[4,10]),
    new AccesoryExercise('Tibialis raises',[3,10]),
    new AccesoryExercise('Copenhagen adductor raise',[2,10]),
]

let abdomenAndLowerback = [
    //core
        new AccesoryExercise('Russian twists',[3,20]),
        new AccesoryExercise('Side crunch',[4,20]),
        new AccesoryExercise('Sit-ups',[3,20]),
        new AccesoryExercise('Toes to bar',[3,10]),
        new AccesoryExercise('Skin the cat',[3,5]),
        new AccesoryExercise('Classic deadlift',[3,10]),
        new AccesoryExercise('Sumo deadlift',[3,10]),
        new AccesoryExercise('Romanian deadlift',[3,10]),
        new AccesoryExercise('Trapbar deadlift',[3,10]),
]
    


let pullExercisesBodyweight = [
    //static arms
    //bilateral
    new AccesoryExercise('Push-ups',[3,10]),
    new AccesoryExercise('Pull-ups',[3,10]),
    new AccesoryExercise('Pull-ups neutral grip',[3,10]),
    new AccesoryExercise('Commando Pull-ups',[3,10]),
    new AccesoryExercise('Chin-ups',[3,10]),
]

let pullExercisesButMoreAccesible = [
    new AccesoryExercise('Face cable pull',[3,10]),
    new AccesoryExercise('Cable pull vertical',[3,10]),
    new AccesoryExercise('Barbell Bent Over Row',[3,10]),
    new AccesoryExercise('Dumbbell Bent Over Row',[3,10]),
    new AccesoryExercise('One Arm Dumbbell Row',[3,10]),
    new AccesoryExercise('Pendley Row',[3,10]),
]

let pushExercises = [
    new AccesoryExercise('Dips',[3,10]),
    new AccesoryExercise('Dumbell floor press',[3,10]),
    new AccesoryExercise('Barbell floor press',[3,10]),
    new AccesoryExercise('Benchpress',[3,10]),
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
    new AccesoryExercise('Bicep curls',[3,10]),
    new AccesoryExercise('Bicep curls',[3,10]),
    new AccesoryExercise('Skull crushers',[3,10]),
    new AccesoryExercise('Wrist curls and extensions',[3,10]),
]

let pressBilateral = [
    //bilateral
    new AccesoryExercise('Overhead press barbell',[3,10]),
    new AccesoryExercise('Overhead Dumbell press',[3,10]),
    new AccesoryExercise('Overhead Kettlebell press',[3,10]),
   ]

let pressUnilateral = [
    //bilateral
    new AccesoryExercise('Overhead press barbell',[3,10]),
    new AccesoryExercise('Overhead Dumbell press',[3,10]),
    new AccesoryExercise('Overhead Kettlebell press',[3,10]),
   ]

let upperBodySmallExercises = [

    new AccesoryExercise('Shrugs',[3,20]),
    new AccesoryExercise('Lateral dumbell raise',[3,10]),
    new AccesoryExercise('Gate cable pulls',[3,10]),
    new AccesoryExercise('Scapulae depression and elevation while hanging',[3,10]),
    new AccesoryExercise('Scapulae protraction and retraction while in push-up position',[3,10])
]

let traversalAccesories = [
    new AccesoryExercise('Farmer carry',[3,10]),
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

    new AccesoryExercise('Hip full ROM rotations lying on the side',[3,10]),
    new AccesoryExercise('Hip full ROM rotations while standing',[3,10]),
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
        [progress4Strength('Squat', Squat, true, false, false),randomPackLegsAsBasic],
        [progress4Volume('Bench', Bench, true, false, false),randomPackUpperBodyChestAndArms],
        [progress4Strength('Deadlift', Deadlift, true, false, false),randomPackUpperBodyAndAbdomen],

        [progress4Volume('Squat',Squat, false, true, false),randomPackLegsAsBasic],
        [progress4Strength('Bench', Bench, true, false, false),randomPackUpperBodyChestAndArms],
        [progress4Volume('Deadlift', Deadlift, false , true ,false),randomPackUpperBodyAndAbdomen],
     
        [progress4Strength('Squat', Squat, false, true ,false),randomPackLegsAsBasic],
        [progress4Volume('Bench', Bench, false, true, false),randomPackUpperBodyChestAndArms],
        [progress4Strength('Deadlift', Deadlift, false, true, false),randomPackUpperBodyAndAbdomen],
// middle to overload tier / hard/optimal
        [progress4Volume('Squat', Squat, false , false, true),randomPackLegsAsBasic],
        [progress4Strength('Bench', Bench, false, true, false),randomPackUpperBodyChestAndArms],
        [progress4Volume('Deadlift', Deadlift, false, false, true),randomPackUpperBodyAndAbdomen],
     
        [progress4Strength('Squat', Squat, false, false, true),randomPackLegsAsBasic],
        [progress4Volume('Bench', Bench, false, false, true),randomPackUpperBodyChestAndArms],
        [progress4Strength('Deadlift', Deadlift, false, false, true),randomPackUpperBodyAndAbdomen],

        [progress4Volume('Squat', Squat, true , false, false),randomPackLegsAsBasic],
        [progress4Strength('Bench', Bench, false, false, true),randomPackUpperBodyChestAndArms],
        [progress4Volume('Deadlift', Deadlift,  true, false, false),randomPackUpperBodyAndAbdomen],
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
