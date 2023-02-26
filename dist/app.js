"use strict";
class MainExercise {
    constructor(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement) {
        this.mainExercise = mainExercise;
        this.load = load;
        this.MusclesInvolvedInExercise = MusclesInvolvedInExercise;
        this.typesOfMovement = typesOfMovement;
    }
}
class AccesoryExercise {
    constructor(accesory, load, MusclesInvolvedInExercise, TypesOfMovement) {
        this.accesory = accesory,
            this.load = load;
        this.MusclesInvolvedInExercise = MusclesInvolvedInExercise;
        this.TypesOfMovement = TypesOfMovement;
    }
}
class MetabolicStress {
    constructor(activity, metabolicLoad, duration, distance) {
        this.activity = activity,
            this.metabolicLoad = metabolicLoad,
            this.duration = duration,
            this.distance = distance;
    }
}
class MusclesInvolvedInExercise {
    constructor(muscleGroupsEngaged) {
        this.muscleGroupsEngaged = muscleGroupsEngaged;
    }
}
const form4Load4 = document.getElementById('MainLoad');
const reps4LoadSquat = document.querySelector('#repsSquat');
const intensity4Squat = document.querySelector('#intensitySquat');
const reps4Deadlift = document.querySelector('#repsDeadlift');
const intensity4Deadlift = document.querySelector('#intensityDeadlift');
const reps4Bench = document.querySelector('#repsBench');
const intensity4Bench = document.querySelector('#intensityBench');
const button = document.querySelector('button');
const loadEstimateSquat = document.getElementById('LoadEstimate_Squat');
const loadEstimateDeadlift = document.getElementById('LoadEstimate_Deadlift');
const loadEstimateBench = document.getElementById('LoadEstimate_Bench');
const dataFromFunc = document.getElementById('kuku');
const playDice = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * Math.floor(arr.length - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
form4Load4 === null || form4Load4 === void 0 ? void 0 : form4Load4.addEventListener('submit', (e) => {
    e.preventDefault();
    const squatLoad = loadTheLoad(Math.round(Number(reps4LoadSquat === null || reps4LoadSquat === void 0 ? void 0 : reps4LoadSquat.value)), Number(intensity4Squat === null || intensity4Squat === void 0 ? void 0 : intensity4Squat.value));
    const deadliftLoad = loadTheLoad(Math.round(Number(reps4Deadlift === null || reps4Deadlift === void 0 ? void 0 : reps4Deadlift.value)), Number(intensity4Deadlift === null || intensity4Deadlift === void 0 ? void 0 : intensity4Deadlift.value));
    const benchLoad = loadTheLoad(Math.round(Number(reps4Bench === null || reps4Bench === void 0 ? void 0 : reps4Bench.value)), Number(intensity4Bench === null || intensity4Bench === void 0 ? void 0 : intensity4Bench.value));
    const repMax4Squat = squatLoad.toString();
    const repMax4Deadlift = deadliftLoad.toString();
    const repMax4Bench = benchLoad.toString();
    const array = basicOverload(Math.round(squatLoad), Math.round(deadliftLoad), Math.round(benchLoad));
    if ((intensity4Squat === null || intensity4Squat === void 0 ? void 0 : intensity4Squat.value) == '' && (reps4LoadSquat === null || reps4LoadSquat === void 0 ? void 0 : reps4LoadSquat.value) == ''
        && (intensity4Deadlift === null || intensity4Deadlift === void 0 ? void 0 : intensity4Deadlift.value) == '' && (reps4Deadlift === null || reps4Deadlift === void 0 ? void 0 : reps4Deadlift.value) == ''
        && (intensity4Bench === null || intensity4Bench === void 0 ? void 0 : intensity4Bench.value) == '' && (reps4Bench === null || reps4Bench === void 0 ? void 0 : reps4Bench.value) == '')
        console.log(array);
    const Projection = array.map((element, index) => {
        let firstExerciseLoad = element[0].load[0];
        let secondExerciseLoad = element[0].load[1];
        let thirdExerciseLoad = element[0].load[2];
        let firstExerciseLoadAccesory = element[1][0].load;
        let secondExerciseLoadAccesory = element[1][1].load;
        let thirdExerciseLoadAccesory = element[1][2].load;
        let table = '';
        table += `  
                <tr>
                <th><h4>${index + 1}. Training unit</h4></th>
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
                `;
        return table;
    });
    dataFromFunc.innerHTML = Projection;
    console.log(repMax4Squat, repMax4Deadlift, repMax4Bench);
    console.log(array);
});
function handleClick() {
    console.log("Clicked!");
}
const loadTheLoad = (repetitions, intensity) => {
    const repMax = repetitions * intensity * 0.033 + intensity;
    return repMax;
};
const lockAndLoad = (loadIntensity, sets, reps) => {
    let load = loadIntensity.map((element) => {
        if (sets == 7) {
            if (element === loadIntensity[0]) {
                return [element, 3, reps];
            }
            if (element === loadIntensity[1]) {
                return [element, 2, reps];
            }
            else {
                return [element, 1, reps];
            }
        }
        if (sets == 6) {
            return [element, 2, reps];
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
    });
    if (sets === 2 || sets === 1) {
        return [` Choose from ${loadIntensity.filter((e) => { return e; })} kg and do sets: ${sets} of ${reps} reps.`];
    }
    else {
        return load;
    }
};
const lockAndLoadForAccesories = () => {
};
let load;
let intensity;
let newMainExercise;
const progress4Strength = (mainExercise, repMax, int80plus, int88plus, int95plus, MusclesInvolvedInExercise, typesOfMovement) => {
    if (int80plus == true && int88plus == false && int95plus == false) {
        load = lockAndLoad([repMax * 0.8, repMax * 0.825, repMax * 0.85], 5, 5);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    if (int80plus == false && int88plus == true && int95plus == false) {
        load = lockAndLoad([repMax * 0.85, repMax * 0.875, repMax * 0.9], 6, 3);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    if (int80plus == false && int88plus == false && int95plus == true) {
        load = lockAndLoad([repMax * 0.875, repMax * 0.9, repMax * 0.925], 7, 2);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    return newMainExercise;
};
const progress4Volume = (mainExercise, repMax, int65plus, int70plus, int75plus, MusclesInvolvedInExercise, typesOfMovement) => {
    if (int65plus == true && int70plus == false && int75plus == false) {
        load = lockAndLoad([repMax * 0.65, repMax * 0.6750, repMax * 0.70], 3, 12);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    if (int65plus == false && int70plus == true && int75plus == false) {
        load = lockAndLoad([repMax * 0.7, repMax * 0.7250, repMax * 0.75], 3, 10);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    if (int65plus == false && int70plus == false && int75plus == true) {
        load = lockAndLoad([repMax * 0.75, repMax * 0.7750, repMax * 0.8], 3, 8);
        return newMainExercise = new MainExercise(mainExercise, load, MusclesInvolvedInExercise, typesOfMovement);
    }
    return newMainExercise;
};
let squatExerciseMain = new MainExercise('Squat', [], ['calves', 'tibialis', 'quadriceps', 'glutes', 'lowerback', 'abdominals'], ['squat', 'bilateral']);
let deadliftExerciseMain = new MainExercise('Deadlift', [], ['calves', 'hamstrings', 'lowerback', 'glutes', 'abdominals', 'arms', 'forearms'], ['hinge', 'bilateral']);
let benchPressExerciseMain = new MainExercise('Benchpress', [], ['forearm', 'arms', 'upperbody', 'chest', 'shoulders'], ['push', 'bilateral']);
let mainExercises = [
    squatExerciseMain,
    deadliftExerciseMain,
    benchPressExerciseMain
];
console.log(mainExercises);
let lowerBodyUnilateral = [
    new AccesoryExercise('Bulgarian split squat', [2, 10], ['quadriceps', 'calves', 'tibialis'], ['lunge', 'unilateral']),
    new AccesoryExercise('Lunge backwards', [2, 10], ['quadriceps', 'hamstrings', 'calves', 'tibialis'], ['lunge', 'unilateral']),
    new AccesoryExercise('Lunge forward', [2, 10], ['quadriceps', 'hamstrings', 'calves', 'tibialis'], ['lunge', 'unilateral']),
    new AccesoryExercise('Lunge lateral (partial cossack squat)', [3, 10], ['quadriceps', 'hamstrings', 'calves', 'tibialis'], ['lunge', 'unilateral']),
    new AccesoryExercise('Cossack squat full ROM', [3, 10], ['quadriceps', 'hamstrings', 'calves', 'tibialis'], ['lunge', 'unilateral']),
    new AccesoryExercise('Single-legged romanian deadlift', [2, 10], ['hamstrings', 'calves', 'tibialis'], ['hinge', 'unilateral']),
    new AccesoryExercise('Staggered-stance romanian deadlift', [2, 10], ['hamstrings', 'quadriceps', 'calves', 'tibialis'], ['hinge', 'unilateral']),
    new AccesoryExercise('Hip thrust - one side only', [2, 10], ['glutes', 'hamstrings', 'calves', 'tibialis'], ['hinge', 'unilateral']),
    new AccesoryExercise('Box step-ups', [3, 10], ['quadriceps', 'hamstrings', 'calves', 'tibialis'], ['hinge', 'unilateral']),
    new AccesoryExercise('Single leg squats', [2, 10], ['quadriceps', 'calves', 'tibialis'], ['hinge', 'unilateral']),
    new AccesoryExercise('Poliquin step-up', [2, 10], ['quadriceps', 'hamstrings', 'calves', 'tibialis'], ['hinge', 'unilateral']),
];
const squatMusclesInvolvement = ['quadriceps', 'calves', 'tibialis', 'glutes', 'lowerback', 'abdominals'];
const deadliftMusclesInvolvment = ['hamstrings', 'glutes', 'lowerback', 'abdominals', 'calves', 'tibialis', 'traps'];
let lowerBodyBilateral = [
    new AccesoryExercise('Back squat', [3, 10], squatMusclesInvolvement, ['squat', 'bilateral']),
    new AccesoryExercise('Front squat', [3, 10], squatMusclesInvolvement, ['squat', 'bilateral']),
    new AccesoryExercise('Box squat', [3, 10], squatMusclesInvolvement, ['squat', 'bilateral']),
    new AccesoryExercise('Pin squat', [3, 10], squatMusclesInvolvement, ['squat', 'bilateral']),
    new AccesoryExercise('Hack squat', [3, 10], squatMusclesInvolvement, ['squat', 'bilateral']),
    new AccesoryExercise('Overhead squat', [3, 10], ['quadriceps', 'calves', 'tibialis', 'glutes', 'lowerback', 'abdominals', 'upperbody', 'arms', 'shoulders', 'forearm'], ['squat', 'bilateral']),
    new AccesoryExercise('Hip thrust', [3, 10], ['glutes', 'hamstrings', 'calves', 'tibialis'], ['hinge', 'unilateral']),
];
let legsSmallExercises = [
    new AccesoryExercise('Calf raises', [3, 10], ['calves', 'tibialis'], ['extension', 'flexion']),
    new AccesoryExercise('Single-leg Calf raises', [4, 10], ['calves', 'tibialis'], ['extension', 'flexion']),
    new AccesoryExercise('Tibialis raises', [3, 10], ['tibialis', 'calves'], ['extension', 'flexion']),
    new AccesoryExercise('Copenhagen adductor raise', [2, 10], ['adductor', 'abdominals'], ['extension', 'flexion']),
];
let abdomenAndLowerback = [
    new AccesoryExercise('Classic deadlift', [3, 10], deadliftMusclesInvolvment, ['hinge', 'bilateral']),
    new AccesoryExercise('Sumo deadlift', [3, 10], ['quadriceps', 'hamstrings', 'glutes', 'lowerback', 'abdominals', 'calves', 'tibialis', 'traps'], ['hinge', 'bilateral']),
    new AccesoryExercise('Romanian deadlift', [3, 10], deadliftMusclesInvolvment, ['hinge', 'bilateral']),
    new AccesoryExercise('Trapbar deadlift', [3, 10], ['quadriceps', 'hamstrings', 'glutes', 'lowerback', 'abdominals', 'calves', 'tibialis', 'traps'], ['hinge', 'bilateral']),
];
let gymnasticsBack = [
    new AccesoryExercise('Russian twists', [3, 20], ['abdominals', 'obliques'], ['rotational']),
    new AccesoryExercise('Side crunch', [4, 20], ['abdominals', 'obliques'], ['flexion']),
    new AccesoryExercise('Sit-ups', [3, 20], ['abdominals', 'lowerback'], ['flexion']),
    new AccesoryExercise('Toes to bar', [3, 10], ['abdominals', 'lowerback', 'arms', 'forearm'], ['flexion']),
    new AccesoryExercise('Skin the cat', [3, 5], ['abdominals', 'lowerback', 'arms', 'forearm'], ['flexion'])
];
let pushUpExerciseBodyWeight = [
    new AccesoryExercise('Push-ups', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral'])
];
let pullExercisesBodyweight = [
    new AccesoryExercise('Pull-ups', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
    new AccesoryExercise('Pull-ups neutral grip', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
    new AccesoryExercise('Commando Pull-ups', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
    new AccesoryExercise('Chin-ups', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
];
let pullExercisesButMoreAccesible = [
    new AccesoryExercise('Face cable pull', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['pull', 'bilateral']),
    new AccesoryExercise('Lat pulldown', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
    new AccesoryExercise('Barbell Bent Over Row', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
    new AccesoryExercise('Dumbbell Bent Over Row', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
    new AccesoryExercise('One Arm Dumbbell Row', [2, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'unilateral']),
    new AccesoryExercise('Pendley Row', [3, 10], ['forearm', 'arms', 'upperback', 'shoulders'], ['pull', 'bilateral']),
];
let pushExercises = [
    new AccesoryExercise('Dips', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Dumbell floor press', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Barbell floor press', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Benchpress', [3, 10], ['forearm', 'arms', 'upperbody', 'chest', 'shoulders'], ['push', 'bilateral'])
];
let isometricsAndHangs = [
    new AccesoryExercise('Deadhangs', [3, '1 min'], ['forearm', 'arms', 'upperbody', 'shoulders'], ['isometric', 'hold']),
    new AccesoryExercise('Forearm plank', [3, '1 min'], ['forearm', 'arms', 'upperbody', 'shoulders', 'abdominals'], ['isometric', 'hold']),
    new AccesoryExercise('Side-plank', [3, '1 min'], ['forearm', 'arms', 'upperbody', 'shoulders'], ['isometric', 'hold']),
    new AccesoryExercise('Reverse gymnastic plank', [3, '1 min'], ['forearm', 'arms', 'upperbody', 'shoulders'], ['isometric', 'hold']),
    new AccesoryExercise('Push-up position hold', [3, '1 min'], ['forearm', 'arms', 'upperbody', 'shoulders'], ['isometric', 'hold']),
    new AccesoryExercise('Bridge', [3, '1 min'], ['forearm', 'arms', 'upperbody', 'shoulders'], ['isometric', 'hold'])
];
console.log(isometricsAndHangs);
let armsHypetrophy = [
    new AccesoryExercise('Bicep curls', [3, 10], ['forearm', 'biceps'], ['flexion', 'isolated', 'bilateral']),
    new AccesoryExercise('Bicep curls neutral grip dumbells', [3, 10], ['forearm', 'biceps'], ['flexion', 'isolated', 'bilateral']),
    new AccesoryExercise('Skull crushers', [3, 10], ['forearm', 'triceps'], ['flexion', 'isolated', 'bilateral']),
    new AccesoryExercise('Wrist curls and extensions', [3, 10], ['forearm'], ['flexion', 'isolated', 'bilateral']),
];
let pressBilateral = [
    new AccesoryExercise('Overhead press barbell', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Overhead dumbell press', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral']),
    new AccesoryExercise('Overhead kettlebell press', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'bilateral'])
];
let pressUnilateral = [
    new AccesoryExercise('Overhead press barbell', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'unilateral']),
    new AccesoryExercise('Overhead Dumbell press', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'unilateral']),
    new AccesoryExercise('Overhead Kettlebell press', [3, 10], ['forearm', 'arms', 'upperbody', 'shoulders'], ['push', 'unilateral']),
];
let upperBodySmallExercises = [
    new AccesoryExercise('Shrugs', [3, 20], ['traps', 'forearm'], ['lift', 'isolated']),
    new AccesoryExercise('Lateral dumbell raise', [3, 10], ['shoulders', 'upperbody', 'arms',], ['lift', 'isolated', 'bilateral']),
    new AccesoryExercise('Gate cable pulls', [3, 10], ['chest', 'upperbody', 'arms'], ['pull', 'bilateral']),
    new AccesoryExercise('Scapulae depression and elevation while hanging', [3, 10], ['upperbody', 'scapulae'], ['isometric', 'bilateral']),
    new AccesoryExercise('Scapulae protraction and retraction while in push-up position', [3, 10], ['upperbody', 'scapulae'], ['isometric', 'bilateral'])
];
let traversalAccesories = [
    new AccesoryExercise('Farmer carry', [3, 10], ['legs', 'lowerbody', 'obliques', 'abdominals', 'arms'], ['traversal', 'bilateral', 'carry']),
    new AccesoryExercise('Sled drag push', [3, 10]),
    new AccesoryExercise('Sled drag pull', [3, 10]),
];
let plyometricLoad = [
    new AccesoryExercise('Jump vertical', [3, 10]),
    new AccesoryExercise('Jump forward', [3, 10]),
    new AccesoryExercise('Lateral side to side lateral jump', [3, 10]),
    new AccesoryExercise('Box jump', [3, 3]),
    new AccesoryExercise('Box drops', [3, 10]),
];
let balisticLoad = [
    new AccesoryExercise('Ball throw - floor', [3, 10]),
    new AccesoryExercise('Ball throw - front', [3, 10]),
    new AccesoryExercise('Ball throw - front rotation', [3, 10]),
    new AccesoryExercise('Ball throw - upwards', [3, 10]),
    new AccesoryExercise('Ball throw - floor side 2 side', [3, 10]),
];
let jointConditioningFRC = [
    new AccesoryExercise('Hip full ROM rotations lying on the side', [2, 10]),
    new AccesoryExercise('Hip full ROM rotations while standing', [2, 10]),
];
let hardstyleSfgSpecific = [
    new AccesoryExercise('Swing', [3, 10]),
    new AccesoryExercise('One arm swing', [3, 10]),
    new AccesoryExercise('Turkish get-up', [3, 10]),
    new AccesoryExercise('Bent press', [3, 10]),
    new AccesoryExercise('Windmill', [3, 10]),
    new AccesoryExercise('One arm kettlebell snatch', [3, 10]),
    new AccesoryExercise('One arm dumbell snatch', [3, 10]),
];
let olympicWeightlifting = [
    new AccesoryExercise('Snatch', [3, 3]),
    new AccesoryExercise('Power snatch', [3, 20]),
    new AccesoryExercise('Hang snatch', [3, 3]),
    new AccesoryExercise('Drop snatch', [3, 3]),
    new AccesoryExercise('Clean and jerk', [3, 3]),
    new AccesoryExercise('Power clean', [3, 3]),
];
const filter4Beginner = () => {
};
const randomPackLegsAsBasic = [playDice(lowerBodyUnilateral)[0], playDice(lowerBodyBilateral)[0], playDice(legsSmallExercises)[0]];
const randomPackUpperBodyAndAbdomen = [playDice(pressBilateral)[0], playDice(abdomenAndLowerback)[0], playDice(armsHypetrophy)[0]];
const randomPackUpperBodyChestAndArms = [playDice(pullExercisesBodyweight)[0], playDice(pullExercisesButMoreAccesible)[0], playDice(pushExercises)[0]];
const basicOverload = (Squat, Bench, Deadlift) => {
    let overLoadedArray = [
        [progress4Strength(`${squatExerciseMain.mainExercise}`, Squat, true, false, false, `${squatExerciseMain.MusclesInvolvedInExercise}`, `${squatExerciseMain.typesOfMovement}`), randomPackLegsAsBasic],
        [progress4Volume(`${benchPressExerciseMain.mainExercise}`, Bench, true, false, false, `${benchPressExerciseMain.MusclesInvolvedInExercise}`, `${benchPressExerciseMain.typesOfMovement}`), randomPackUpperBodyChestAndArms],
        [progress4Strength(`${deadliftExerciseMain.mainExercise}`, Deadlift, true, false, false, `${deadliftExerciseMain.MusclesInvolvedInExercise}`, `${deadliftExerciseMain.typesOfMovement}`), randomPackUpperBodyAndAbdomen],
        [progress4Volume(`${squatExerciseMain.mainExercise}`, Squat, false, true, false, `${squatExerciseMain.MusclesInvolvedInExercise}`, `${squatExerciseMain.typesOfMovement}`), randomPackLegsAsBasic],
        [progress4Strength(`${benchPressExerciseMain.mainExercise}`, Bench, true, false, false, `${benchPressExerciseMain.MusclesInvolvedInExercise}`, `${benchPressExerciseMain.typesOfMovement}`), randomPackUpperBodyChestAndArms],
        [progress4Volume(`${deadliftExerciseMain.mainExercise}`, Deadlift, false, true, false, `${deadliftExerciseMain.MusclesInvolvedInExercise}`, `${deadliftExerciseMain.typesOfMovement}`), randomPackUpperBodyAndAbdomen],
        [progress4Strength(`${squatExerciseMain.mainExercise}`, Squat, false, true, false, `${squatExerciseMain.MusclesInvolvedInExercise}`, `${squatExerciseMain.typesOfMovement}`), randomPackLegsAsBasic],
        [progress4Volume(`${benchPressExerciseMain.mainExercise}`, Bench, false, true, false, `${benchPressExerciseMain.MusclesInvolvedInExercise}`, `${benchPressExerciseMain.typesOfMovement}`), randomPackUpperBodyChestAndArms],
        [progress4Strength(`${deadliftExerciseMain.mainExercise}`, Deadlift, false, true, false, `${deadliftExerciseMain.MusclesInvolvedInExercise}`, `${deadliftExerciseMain.typesOfMovement}`), randomPackUpperBodyAndAbdomen],
        [progress4Volume(`${squatExerciseMain.mainExercise}`, Squat, false, false, true, `${squatExerciseMain.MusclesInvolvedInExercise}`, `${squatExerciseMain.typesOfMovement}`), randomPackLegsAsBasic],
        [progress4Strength(`${benchPressExerciseMain.mainExercise}`, Bench, false, true, false, `${benchPressExerciseMain.MusclesInvolvedInExercise}`, `${benchPressExerciseMain.typesOfMovement}`), randomPackUpperBodyChestAndArms],
        [progress4Volume(`${deadliftExerciseMain.mainExercise}`, Deadlift, false, false, true, `${deadliftExerciseMain.MusclesInvolvedInExercise}`, `${deadliftExerciseMain.typesOfMovement}`), randomPackUpperBodyAndAbdomen],
        [progress4Strength(`${squatExerciseMain.mainExercise}`, Squat, false, false, true, `${squatExerciseMain.MusclesInvolvedInExercise}`, `${squatExerciseMain.typesOfMovement}`), randomPackLegsAsBasic],
        [progress4Volume(`${benchPressExerciseMain.mainExercise}`, Bench, false, false, true, `${benchPressExerciseMain.MusclesInvolvedInExercise}`, `${benchPressExerciseMain.typesOfMovement}`), randomPackUpperBodyChestAndArms],
        [progress4Strength(`${deadliftExerciseMain.mainExercise}`, Deadlift, false, false, true, `${deadliftExerciseMain.MusclesInvolvedInExercise}`, `${deadliftExerciseMain.typesOfMovement}`), randomPackUpperBodyAndAbdomen],
        [progress4Volume(`${squatExerciseMain.mainExercise}`, Squat, true, false, false, `${squatExerciseMain.MusclesInvolvedInExercise}`, `${squatExerciseMain.typesOfMovement}`), randomPackLegsAsBasic],
        [progress4Strength(`${benchPressExerciseMain.mainExercise}`, Bench, false, false, true, `${benchPressExerciseMain.MusclesInvolvedInExercise}`, `${benchPressExerciseMain.typesOfMovement}`), randomPackUpperBodyChestAndArms],
        [progress4Volume(`${deadliftExerciseMain.mainExercise}`, Deadlift, true, false, false, `${deadliftExerciseMain.MusclesInvolvedInExercise}`, `${deadliftExerciseMain.typesOfMovement}`), randomPackUpperBodyAndAbdomen],
    ];
    return overLoadedArray;
};
let z = basicOverload(100, 120, 130);
console.log(z);
const chooseWhichFirst = (overload, choice) => {
    if (choice === 'smoothParts') {
        return overload.splice(9);
    }
    if (choice === 'hardParts') {
        return overload.splice(0);
    }
    ;
    return;
};
let usedUnits = [];
let currentUnit = [];
const freeFallProgression = (load) => {
    usedUnits.push(load[0]);
    let shiftingArray = load.shift();
    return shiftingArray;
};
let paidTwiceArray = [];
let paidTwiceArray1 = [];
let paidTwiceArray2 = [];
const chooseFromVolume = (overload) => {
    const highestVol = overload.filter((a) => {
        return a + a;
    });
    return highestVol;
};
const chooseFromIntensity = (overload) => {
    const highestInt = overload.filter((a) => {
        return a.reps <= 5;
    });
    return highestInt;
};
//# sourceMappingURL=app.js.map