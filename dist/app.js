"use strict";
class TrainingUnit {
    constructor(MainExercise, Accesories, MetabolicStress) {
        this.MainExercise = MainExercise;
        this.Accesories = Accesories;
        this.MetabolicStress = MetabolicStress;
    }
}
class MainExercise {
    constructor(mainExercise, load, pauseDuration) {
        this.mainExercise = mainExercise;
        this.load = load;
        this.pauseDuration = pauseDuration;
    }
}
class AccesoryExercise {
    constructor(accesory, load, muscleGroupEngaded) {
        this.accesory = accesory,
            this.load = load;
        this.muscleGroupEngaded = muscleGroupEngaded;
    }
}
class MetabolicStress {
    constructor(activity, metabolicLoad, duration) {
        this.activity = activity,
            this.metabolicLoad = metabolicLoad,
            this.duration = duration;
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
class TypesOfTraining {
    constructor(strength, speed, power, agility, anaerobicCapacity, aerobicCpacity, mobility, balanceAndCoordination, stability) {
        this.strength = strength;
        this.speed = speed;
        this.power = power;
        this.agility = agility;
        this.anaerobicCapacity = anaerobicCapacity;
        this.aerobicCapacity = aerobicCpacity;
        this.mobility = mobility;
        this.balanceAndCoordination = balanceAndCoordination;
        this.stability = stability;
    }
}
class TypesOfMovement {
    constructor(bilateral, unilateral, rotational, traversal) {
        this.bilateral = bilateral;
        this.unilateral = unilateral;
        this.rotational = rotational;
        this.traversal = traversal;
    }
}
class ExerciseVariations {
    constructor(isometrics, prolongedEccentricPhase, prolongedConentricPhase, pausesDuringRep, oneAndHalfRep) {
        this.isometrics = isometrics;
        this.prolongedEccentricPhase = prolongedEccentricPhase;
        this.prolongedConentricPhase = prolongedConentricPhase;
        this.pausesDuringRep = pausesDuringRep;
        this.oneAndHalfRep = oneAndHalfRep;
    }
}
class Tools4Exercises {
    constructor(normalBarbell, trapBar, openTrapBar, cumberedBar, safetyBar) {
        this.normalBarbell = normalBarbell;
        this.trapBar = trapBar;
        this.openTrapBar = openTrapBar;
        this.cumberedBar = cumberedBar;
        this.safetyBar = safetyBar;
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
                <td><h4>${Math.round(element[0].load[0][0])} kg </h4></td>
                <td><h5>${element[0].load[0][1]}</h5></td>
                <td></td>
                <td><h5>${element[0].load[0][2]}</h5></td>
                </tr>
                <tr>
                <td><h4>${Math.round(element[0].load[1][0])} kg </h4></td>
                <td><h5>${element[0].load[1][1]}</h5></td>
                <td></td>
                <td><h5>${element[0].load[1][2]}</h5></td>
                </tr>
                <tr>
                <td><h4>${Math.round(element[0].load[2][0])} kg </h4></td>
                <td><h5>${element[0].load[2][1]}</h5></td>
                <td></td>
                <td><h5>${element[0].load[2][2]}</h5></td>
                </tr>
                <tr>
                <td><h4> Accesory I : ${element[1][0].accesory}</h4></td>
                <td><h5>${element[1][0].load[0]}</h5></td>
                <td></td>
                <td><h5>${element[1][0].load[1]}</h5></td>
                </tr>   
                <tr>
                <td><h4> Accesory II : ${element[1][1].accesory} </h4></td>
                <td><h5>${element[1][1].load[0]}</h5></td>
                <td></td>
                <td><h5>${element[1][1].load[1]}</h5></td>
                </tr>
                <tr>
                <td><h4> Accesory III : ${element[1][2].accesory} </h4></td>
                <td><h5>${element[1][2].load[0]}</h5></td>
                <td></td>
                <td><h5>${element[1][2].load[1]}</h5></td>
                <td></td>
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
let Acc1 = [
    new AccesoryExercise('Bulgarian split squat', [3, 10]),
    new AccesoryExercise('Swing', [3, 10]),
    new AccesoryExercise('Calf raises', [3, 20])
];
let Acc2 = [
    new AccesoryExercise('Pull-ups', [3, 10]),
    new AccesoryExercise('Bicep curls', [3, 10]),
    new AccesoryExercise('Db press', [3, 10])
];
let Acc3 = [
    new AccesoryExercise('Overhead press', [3, 10]),
    new AccesoryExercise('Russian twists', [3, 20]),
    new AccesoryExercise('shrugs', [3, 20])
];
const basicOverload = (Squat, Bench, Deadlift) => {
    let overLoadedArray = [
        [progress4Strength('Squat', Squat, true, false, false), Acc1],
        [progress4Volume('Bench', Bench, true, false, false), Acc2],
        [progress4Strength('Deadlift', Deadlift, true, false, false), Acc3],
        [progress4Volume('Squat', Squat, false, true, false), Acc1],
        [progress4Strength('Bench', Bench, true, false, false), Acc2],
        [progress4Volume('Deadlift', Deadlift, false, true, false), Acc3],
        [progress4Strength('Squat', Squat, false, true, false), Acc1],
        [progress4Volume('Bench', Bench, false, true, false), Acc2],
        [progress4Strength('Deadlift', Deadlift, false, true, false), Acc3],
        [progress4Volume('Squat', Squat, false, false, true), Acc1],
        [progress4Strength('Bench', Bench, false, true, false), Acc2],
        [progress4Volume('Deadlift', Deadlift, false, false, true), Acc3],
        [progress4Strength('Squat', Squat, false, false, true), Acc1],
        [progress4Volume('Bench', Bench, false, false, true), Acc2],
        [progress4Strength('Deadlift', Deadlift, false, false, true), Acc3],
        [progress4Volume('Squat', Squat, true, false, false), Acc1],
        [progress4Strength('Bench', Bench, false, false, true), Acc2],
        [progress4Volume('Deadlift', Deadlift, true, false, false), Acc3],
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
const playDice = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * Math.floor(arr.length - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
let nonrepeating = [];
const trackTheVolume = (overload) => {
    let nag = [];
    overload.filter((e) => {
        if (e.sets !== 0) {
            e = e.sets * e.reps * e.intensity;
            nag.push(e);
        }
        ;
    });
    return nag.reduce((acc, cur) => acc + cur);
};
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