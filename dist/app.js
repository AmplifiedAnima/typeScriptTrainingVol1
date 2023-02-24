"use strict";
class TrainingUnit {
    constructor(MainExercise, Accesories, MetabolicStress) {
        this.MainExercise = MainExercise;
        this.Accesories = Accesories;
        this.MetabolicStress = MetabolicStress;
    }
}
class MainExercise {
    constructor(mainExercise, load) {
        this.mainExercise = mainExercise;
        this.load = load;
    }
}
class AccesoryExercise {
    constructor(accesory, load, muscleGroupEngaded, TypesOfMovement) {
        this.accesory = accesory,
            this.load = load;
        this.muscleGroupEngaded = muscleGroupEngaded;
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
class MuscleGroups {
    constructor(calves, tibialis, hamstrings, quadriceps, glutes, abdominals, obliques, lowerback, chest, upperbackAndScapula, shoulders, biceps, triceps, forearm) {
        this.calves = calves;
        this.tibialis = tibialis;
        this.hamstrings = hamstrings;
        this.quadriceps = quadriceps;
        this.glutes = glutes;
        this.abdominals = abdominals;
        this.obliques = obliques;
        this.lowerback = lowerback;
        this.chest = chest;
        this.upperbackAndScapula = upperbackAndScapula;
        this.shoulders = shoulders;
        this.biceps = biceps;
        this.triceps = triceps;
        this.forearm = forearm;
    }
}
class MusclesInvolvedInExercise {
    constructor(muscleGroupsEngaged) {
        this.muscleGroupsEngaged = muscleGroupsEngaged;
    }
}
class TypesOfTraining {
    constructor(strength, speed, power, anaerobicCapacity, aerobicCpacity) {
        this.strength = strength;
        this.speed = speed;
        this.power = power;
        this.anaerobicCapacity = anaerobicCapacity;
        this.aerobicCapacity = aerobicCpacity;
    }
}
class TypesOfMovement {
    constructor(standing, bilateral, unilateral, lateral, rotational, traversal, plyometric, balistic) {
        this.standing = standing;
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
    constructor(isometrics, prolongedEccentricPhase, prolongedConentricPhase, pausesDuringRep, oneAndHalfRep, explosive) {
        this.isometrics = isometrics;
        this.prolongedEccentricPhase = prolongedEccentricPhase;
        this.prolongedConentricPhase = prolongedConentricPhase;
        this.pausesDuringRep = pausesDuringRep;
        this.oneAndHalfRep = oneAndHalfRep;
        this.explosive = explosive;
    }
}
class Tools4Exercises {
    constructor(normalBarbell, trapBar, openTrapBar, cumberedBar, safetyBar, landmineHalfOfBarbell, dumbBells, kettleBells, platesAndBumpers, bulgarianBag, balls, gymnasticRings, TRX, ropes, resistanceBand, slantboard) {
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
        const volumeTrackerMini = (overload) => {
            let totalExerciseLoad = overload[0] * overload[1] * overload[2];
            return Math.round(totalExerciseLoad);
        };
        console.log(volumeTrackerMini(firstExerciseLoad));
        let table = '';
        table += `  
                <tr>
                <th><h4>${index + 1}. Training unit</h4></th>
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
const progress4Strength = (mainExercise, repMax, int80plus, int88plus, int95plus) => {
    if (int80plus == true && int88plus == false && int95plus == false) {
        load = lockAndLoad([repMax * 0.8, repMax * 0.825, repMax * 0.85], 5, 5);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == true && int95plus == false) {
        load = lockAndLoad([repMax * 0.875, repMax * 0.9, repMax * 0.925], 6, 3);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == false && int95plus == true) {
        load = lockAndLoad([repMax * 0.90, repMax * 0.925, repMax * 0.95], 7, 2);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    return newMainExercise;
};
const progress4Volume = (mainExercise, repMax, int65plus, int70plus, int75plus) => {
    if (int65plus == true && int70plus == false && int75plus == false) {
        load = lockAndLoad([repMax * 0.65, repMax * 0.6750, repMax * 0.70], 3, 12);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == true && int75plus == false) {
        load = lockAndLoad([repMax * 0.7, repMax * 0.7250, repMax * 0.75], 3, 10);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == false && int75plus == true) {
        load = lockAndLoad([repMax * 0.75, repMax * 0.7750, repMax * 0.8], 3, 8);
        return newMainExercise = new MainExercise(mainExercise, load);
    }
    return newMainExercise;
};
let mainExercises = [
    new AccesoryExercise('Squat', [3, 10], new MuscleGroups()),
    new AccesoryExercise('Deadlift', [3, 10]),
    new AccesoryExercise('Benchpress', [3, 10])
];
console.log(mainExercises);
let lowerBodyUnilateral = [
    new AccesoryExercise('Bulgarian split squat', [4, 10]),
    new AccesoryExercise('Lunge backwards', [4, 10]),
    new AccesoryExercise('Lunge forward', [4, 10]),
    new AccesoryExercise('Lunge lateral (partial cossack squat)', [4, 10]),
    new AccesoryExercise('Cossack squat full ROM', [4, 10]),
    new AccesoryExercise('Single-legged romanian deadlift', [4, 10]),
    new AccesoryExercise('Staggered-stance romanian deadlift', [4, 10]),
    new AccesoryExercise('Hip thrust - one side only', [3, 10]),
    new AccesoryExercise('Box step-ups', [4, 10]),
    new AccesoryExercise('Single leg squats', [4, 10]),
    new AccesoryExercise('Poliquin step-up', [4, 10])
];
let lowerBodyBilateral = [
    new AccesoryExercise('Back squat', [3, 10]),
    new AccesoryExercise('Front squat', [3, 10]),
    new AccesoryExercise('Box squat', [3, 10]),
    new AccesoryExercise('Pin squat', [3, 10]),
    new AccesoryExercise('Hack squat', [3, 10]),
    new AccesoryExercise('Overhead squat', [3, 10]),
    new AccesoryExercise('Hip thrust', [3, 10]),
    new AccesoryExercise('', [3, 10]),
];
let legsSmallExercises = [
    new AccesoryExercise('Calf raises', [3, 10]),
    new AccesoryExercise('Single-leg Calf raises', [4, 10]),
    new AccesoryExercise('Tibialis raises', [3, 10]),
    new AccesoryExercise('Copenhagen adductor raise', [2, 10]),
];
let abdomenAndLowerback = [
    new AccesoryExercise('Russian twists', [3, 20]),
    new AccesoryExercise('Side crunch', [4, 20]),
    new AccesoryExercise('Sit-ups', [3, 20]),
    new AccesoryExercise('Toes to bar', [3, 10]),
    new AccesoryExercise('Skin the cat', [3, 5]),
    new AccesoryExercise('Classic deadlift', [3, 10]),
    new AccesoryExercise('Sumo deadlift', [3, 10]),
    new AccesoryExercise('Romanian deadlift', [3, 10]),
    new AccesoryExercise('Trapbar deadlift', [3, 10]),
];
let pullExercisesBodyweight = [
    new AccesoryExercise('Push-ups', [3, 10]),
    new AccesoryExercise('Pull-ups', [3, 10]),
    new AccesoryExercise('Pull-ups neutral grip', [3, 10]),
    new AccesoryExercise('Commando Pull-ups', [3, 10]),
    new AccesoryExercise('Chin-ups', [3, 10]),
];
let pullExercisesButMoreAccesible = [
    new AccesoryExercise('Face cable pull', [3, 10]),
    new AccesoryExercise('Cable pull vertical', [3, 10]),
    new AccesoryExercise('Barbell Bent Over Row', [3, 10]),
    new AccesoryExercise('Dumbbell Bent Over Row', [3, 10]),
    new AccesoryExercise('One Arm Dumbbell Row', [3, 10]),
    new AccesoryExercise('Pendley Row', [3, 10]),
];
let pushExercises = [
    new AccesoryExercise('Dips', [3, 10]),
    new AccesoryExercise('Dumbell floor press', [3, 10]),
    new AccesoryExercise('Barbell floor press', [3, 10]),
    new AccesoryExercise('Benchpress', [3, 10]),
];
let isometricsAndHangs = [
    new AccesoryExercise('Deadhangs', [3, 10]),
    new AccesoryExercise('Forearm plank', [3, 20]),
    new AccesoryExercise('Side-plank', [3, 20]),
    new AccesoryExercise('Reverse gymnastic plank', [3, 10]),
    new AccesoryExercise('Push-up position hold', [3, 20]),
    new AccesoryExercise('Bridge', [3, 20])
];
let armsHypetrophy = [
    new AccesoryExercise('Bicep curls', [3, 10]),
    new AccesoryExercise('Bicep curls', [3, 10]),
    new AccesoryExercise('Skull crushers', [3, 10]),
    new AccesoryExercise('Wrist curls and extensions', [3, 10]),
];
let pressBilateral = [
    new AccesoryExercise('Overhead press barbell', [3, 10]),
    new AccesoryExercise('Overhead Dumbell press', [3, 10]),
    new AccesoryExercise('Overhead Kettlebell press', [3, 10]),
];
let pressUnilateral = [
    new AccesoryExercise('Overhead press barbell', [3, 10]),
    new AccesoryExercise('Overhead Dumbell press', [3, 10]),
    new AccesoryExercise('Overhead Kettlebell press', [3, 10]),
];
let upperBodySmallExercises = [
    new AccesoryExercise('Shrugs', [3, 20]),
    new AccesoryExercise('Lateral dumbell raise', [3, 10]),
    new AccesoryExercise('Gate cable pulls', [3, 10]),
    new AccesoryExercise('Scapulae depression and elevation while hanging', [3, 10]),
    new AccesoryExercise('Scapulae protraction and retraction while in push-up position', [3, 10])
];
let traversalAccesories = [
    new AccesoryExercise('Farmer carry', [3, 10]),
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
    new AccesoryExercise('Hip full ROM rotations lying on the side', [3, 10]),
    new AccesoryExercise('Hip full ROM rotations while standing', [3, 10]),
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
        [progress4Strength('Squat', Squat, true, false, false), randomPackLegsAsBasic],
        [progress4Volume('Bench', Bench, true, false, false), randomPackUpperBodyChestAndArms],
        [progress4Strength('Deadlift', Deadlift, true, false, false), randomPackUpperBodyAndAbdomen],
        [progress4Volume('Squat', Squat, false, true, false), randomPackLegsAsBasic],
        [progress4Strength('Bench', Bench, true, false, false), randomPackUpperBodyChestAndArms],
        [progress4Volume('Deadlift', Deadlift, false, true, false), randomPackUpperBodyAndAbdomen],
        [progress4Strength('Squat', Squat, false, true, false), randomPackLegsAsBasic],
        [progress4Volume('Bench', Bench, false, true, false), randomPackUpperBodyChestAndArms],
        [progress4Strength('Deadlift', Deadlift, false, true, false), randomPackUpperBodyAndAbdomen],
        [progress4Volume('Squat', Squat, false, false, true), randomPackLegsAsBasic],
        [progress4Strength('Bench', Bench, false, true, false), randomPackUpperBodyChestAndArms],
        [progress4Volume('Deadlift', Deadlift, false, false, true), randomPackUpperBodyAndAbdomen],
        [progress4Strength('Squat', Squat, false, false, true), randomPackLegsAsBasic],
        [progress4Volume('Bench', Bench, false, false, true), randomPackUpperBodyChestAndArms],
        [progress4Strength('Deadlift', Deadlift, false, false, true), randomPackUpperBodyAndAbdomen],
        [progress4Volume('Squat', Squat, true, false, false), randomPackLegsAsBasic],
        [progress4Strength('Bench', Bench, false, false, true), randomPackUpperBodyChestAndArms],
        [progress4Volume('Deadlift', Deadlift, true, false, false), randomPackUpperBodyAndAbdomen],
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
const trackTheVolume = (overload) => {
    let totalLoadExerciseValue;
    let totalOfLoad = [];
    overload.filter((e) => {
        totalLoadExerciseValue = e[0].load[0][0] * e[0].load[0][1] * e[0].load[0][2];
        totalOfLoad.push(totalLoadExerciseValue);
    });
    return totalOfLoad.reduce((acc, cur) => acc + cur);
};
console.log(trackTheVolume(z));
const chooseFromVolume = (overload) => {
    const highestVol = overload.filter((a) => {
        return a.sets === 3;
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