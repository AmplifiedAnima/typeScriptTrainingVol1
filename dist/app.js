"use strict";
class TrainingUnitMainExercise {
    constructor(mainExercise, load) {
        this.mainExercise = mainExercise;
        this.load = load;
    }
}
class AccesoryExercise {
    constructor(accesory, load) {
        this.accesory = accesory,
            this.load = load;
    }
}
class GeneralFitness {
    constructor(activity, load) {
        this.activity = activity,
            this.load = load;
    }
}
class ActiveRecovery {
    constructor(activity, load) {
        this.activity = activity,
            this.load = load;
    }
}
class TrainingUnit {
    constructor() {
        this.mainExercise = TrainingUnitMainExercise;
        this.accesories = AccesoryExercise;
    }
}
const form4Load = document.getElementById('CHAD');
const button = document.querySelector('button');
const reps4Load = document.querySelector('#reps');
const weight4Load = document.querySelector('#weight');
const loadEstimate = document.getElementById('kuku');
form4Load === null || form4Load === void 0 ? void 0 : form4Load.addEventListener('submit', (e) => {
    e.preventDefault();
    let z = loadTheLoad(Number(reps4Load === null || reps4Load === void 0 ? void 0 : reps4Load.value), Number(weight4Load === null || weight4Load === void 0 ? void 0 : weight4Load.value));
    if ((weight4Load === null || weight4Load === void 0 ? void 0 : weight4Load.value) == '' && (reps4Load === null || reps4Load === void 0 ? void 0 : reps4Load.value) == '' || (weight4Load === null || weight4Load === void 0 ? void 0 : weight4Load.value) == null && (reps4Load === null || reps4Load === void 0 ? void 0 : reps4Load.value) == null)
        console.log(loadTheLoad(Number(reps4Load === null || reps4Load === void 0 ? void 0 : reps4Load.value), Number(weight4Load === null || weight4Load === void 0 ? void 0 : weight4Load.value)));
    console.log(z.toString());
});
function handleClick() {
    console.log("Clicked!");
}
const loadTheLoad = (repetitions, intensity) => {
    const repMax = repetitions * intensity * 0.033 + intensity;
    return repMax;
};
let load;
let intensity;
let testooo;
let sets;
let reps;
let newTrainingUnit;
let n = 0.86;
let repMax = 100;
function lockAndLoad(loadIntensity, sets, reps) {
    let load = loadIntensity.map((element) => {
        if (sets == 7) {
            if (element === loadIntensity[0]) {
                return [`${element} kg`, 3, reps];
            }
            if (element === loadIntensity[1]) {
                return [`${element} kg`, 2, reps];
            }
            else {
                return [`${element} kg`, 1, reps];
            }
        }
        ;
        if (sets == 6) {
            return [`${element} kg`, 2, reps];
        }
        if (sets == 5) {
            if (element !== loadIntensity[2]) {
                return [`${element} kg`, 2, reps];
            }
            else {
                return [`${element} kg`, 1, reps];
            }
        }
        ;
        if (sets == 4) {
            if (element !== loadIntensity[0]) {
                return [`${element} kg`, 1, reps];
            }
            else {
                return [`${element} kg`, 2, reps];
            }
        }
        ;
        if (sets == 3) {
            return [`${element} kg`, 1, reps];
        }
        ;
        return;
    });
    if (sets === 2 || sets === 1) {
        return [` Choose from ${loadIntensity[0]}, ${loadIntensity[1]}, ${loadIntensity[2]} kg and do ${sets} of ${reps}`];
    }
    else {
        return load;
    }
}
;
console.log(lockAndLoad([repMax * 0.88, repMax * 0.90, repMax * 0.92], 7, 3));
console.log(lockAndLoad([repMax * 0.88, repMax * 0.90, repMax * 0.92], 6, 3));
console.log(lockAndLoad([repMax * 0.8, repMax * 0.825, repMax * 0.85], 5, 5));
console.log(lockAndLoad([repMax * 0.88, repMax * 0.90, repMax * 0.92], 4, 3));
console.log(lockAndLoad([repMax * 0.88, repMax * 0.90, repMax * 0.92], 3, 3));
console.log(lockAndLoad([repMax * 0.88, repMax * 0.90, repMax * 0.92], 2, 3));
const progress4Strength = (mainExercise, repMax, int80plus, int88plus, int95plus) => {
    if (int80plus == true && int88plus == false && int95plus == false) {
        load = lockAndLoad([repMax * 0.8, repMax * 0.825, repMax * 0.85], 5, 5);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == true && int95plus == false) {
        load = lockAndLoad([repMax * 0.875, repMax * 0.9, repMax * 0.925], 6, 3);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int80plus == false && int88plus == false && int95plus == true) {
        load = lockAndLoad([repMax * 0.90, repMax * 0.925, repMax * 0.95], 7, 2);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    return newTrainingUnit;
};
const progress4Volume = (mainExercise, repMax, int65plus, int70plus, int75plus) => {
    if (int65plus == true && int70plus == false && int75plus == false) {
        load = lockAndLoad([repMax * 0.65, repMax * 0.6750, repMax * 0.70], 3, 12);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == true && int75plus == false) {
        load = lockAndLoad([repMax * 0.7, repMax * 0.7250, repMax * 0.75], 3, 10);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    if (int65plus == false && int70plus == false && int75plus == true) {
        sets = 3;
        reps = 8;
        load = lockAndLoad([repMax * 0.75, repMax * 0.7750, repMax * 0.8], 3, 8);
        return newTrainingUnit = new TrainingUnitMainExercise(mainExercise, load);
    }
    return newTrainingUnit;
};
const basicOverload = (Squat, Bench, Deadlift) => {
    let overLoadedArray = [
        progress4Strength('Squat', Squat, true, false, false),
        progress4Volume('Bench', Bench, true, false, false),
        progress4Strength('Deadlift', Deadlift, true, false, false),
        progress4Volume('Squat', Squat, false, true, false),
        progress4Strength('Bench', Bench, true, false, false),
        progress4Volume('Deadlift', Deadlift, false, true, false),
        progress4Strength('Squat', Squat, false, true, false),
        progress4Volume('Bench', Bench, false, true, false),
        progress4Strength('Deadlift', Deadlift, true, false, false),
        progress4Volume('Squat', Squat, false, false, true),
        progress4Strength('Bench', Bench, false, true, false),
        progress4Volume('Deadlift', Deadlift, false, false, true),
        progress4Strength('Squat', Squat, false, false, true),
        progress4Volume('Bench', Bench, false, false, true),
        progress4Strength('Deadlift', Deadlift, false, false, true),
        progress4Volume('Squat', Squat, true, false, false),
        progress4Strength('Bench', Bench, false, false, true),
        progress4Volume('Deadlift', Deadlift, true, false, false)
    ];
    return overLoadedArray;
};
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
const z = basicOverload(95, 125, 130);
let usedUnits = [];
const freefallProgressionSingle = (load) => {
    return load.splice(1);
};
const freeFallProgression = (load) => {
    return load.splice(3);
};
console.log(z);
const playDice = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * Math.floor(arr.length - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};
console.log(playDice(z));
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