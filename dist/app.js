"use strict";
class TrainingUnitMainExercise {
    constructor(mainExercise, reps, sets, intensity) {
        this.mainExercise = mainExercise;
        this.reps = reps;
        this.sets = sets;
        this.intensity = intensity;
    }
}
class trainingUnitAccesory {
    constructor(accesory, accesorySets, accesoryReps) {
        this.accesory = accesory;
        this.accesorySets = accesorySets;
        this.accesoryReps = accesoryReps;
    }
}
class IncreasingGeneralFitness extends TrainingUnitMainExercise {
    constructor() {
        super(...arguments);
        this.duration = this.reps;
    }
    super(mainExercise, duration, sets, intensity) {
        this.mainExercise = mainExercise;
        this.duration = duration;
        this.sets = sets;
        this.intensity = intensity;
    }
}
class TrainingUnit {
    constructor() {
        this.mainExercise = TrainingUnitMainExercise;
        this.accesories = trainingUnitAccesory;
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
let intensity;
let sets;
let reps;
let newTrainingUnit = {};
let n = 0.86;
const progress4Strength = (mainExercise, repMax, int88plus, int92plus, int95plus) => {
    if (int88plus == true && int92plus == false && int95plus == false) {
        sets = 5;
        reps = 5;
        intensity = repMax * 0, 88;
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
const progress4Volume = (mainExercise, repMax, int65plus, int75plus, int85plus) => {
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
const z = basicOverload(100, 100, 100);
let usedUnits = [];
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