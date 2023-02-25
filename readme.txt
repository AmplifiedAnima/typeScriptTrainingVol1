 // //legs
            // this.calves = calves
            // this.tibialis = tibialis;
            // this.hamstrings = hamstrings;
            // this.quadriceps = quadriceps;
            // this.glutes = glutes;
            // //trunk (***could be called core)
            // this.abdominals = abdominals;
            // this.obliques = obliques;
            // this.lowerback = lowerback;
            // //upperbody
            // this.chest = chest;
            // this.upperbackAndScapula = upperbackAndScapula;
            // this.shoulders = shoulders;
            // //arms
            // this.biceps = biceps;
            // this.triceps = triceps;
            // this.forearm = forearm;




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
// types of movement

PULL

UNILATERAL

BILATERAL

PUSH 

UNILATERAL

BILATERAL

SQUAT 

UNILATERAL

BILATERAL

LUNGE

UNILATERAL

BILATERAL

Hinge

UNILATERAL

BILATERAL

ROTATION

GAIT




MAIN : SQUAT -  LEGS

1. Bulgarian split squat  x 10 LEGS

2. Swing 3x 10 LOWERBODY

3. calf raises 3 x 20 LEGS


MAIN: DEADLIFT - LOWERBODY


4. overhead press 3x10 UPPERBODY

5. Russian twists 3x20 ABDOMINALS

6. shrugs 3x20 UPPERBODY


MAIN: Benchpress - UPPERBODY/CHEST

6. pull-ups wide grip 3 x 5, 10 || AMRAP UPPERBODY
 
7. Bicep Curls 3 x 10 ARMS

8. gate pulling cable links 3x10 CHEST




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
