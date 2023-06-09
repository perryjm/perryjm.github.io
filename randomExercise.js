"use strict";

const randomActivities = [
  "Go for a brisk walk around the neighborhood",
  "Do a 20-minute yoga routine at home",
  "Go for a leisurely bike ride on a nearby trail",
  "Take a dance fitness class",
  "Try a Pilates workout",
  "Do a bodyweight strength training circuit",
  "Take a gentle aerobics class",
  "Go for a swim at a local pool or lake",
  "Do a stretching routine or attend a stretching class",
  "Go for a jog or run around a nearby park",
  "Try a beginner's Zumba class",
  "Do a low-impact cardio workout, like jumping jacks or marching in place",
  "Take a leisurely hike in the woods",
  "Do a beginner's barre workout",
  "Try a Tai Chi class or video",
  "Do a mini-trampoline workout",
  "Take a gentle water aerobics class",
  "Go for a walk on the beach",
  "Do a beginner's kickboxing workout",
  "Try a beginner's hula hoop workout",
  "Take a leisurely paddleboat ride",
  "Do a beginner's resistance band workout",
  "Try a beginner's trampoline workout",
  "Do a beginner's hula hoop workout",
  "Take a leisurely paddleboat ride",
  "Do a beginner's resistance band workout",
  "Try a beginner's TRX workout",
  "Do a beginner's foam roller routine",
  "Take a gentle rowing class",
  "Try a beginner's bouldering class",
  "Do a beginner's kettlebell workout",
  "Take a gentle spinning class",
  "Try a beginner's boxing class",
  "Do a beginner's jump rope workout",
  "Take a leisurely cross-country skiing trip",
  "Try a beginner's yoga on the beach class",
  "Do a beginner's Nordic walking workout",
  "Take a gentle aqua jogging class",
  "Try a beginner's paddleboarding workout",
  "Do a beginner's resistance ball workout",
  "Take a leisurely snowshoeing trip",
  "Try a beginner's jump rope workout",
  "Do a beginner's skipping workout",
  "Take a gentle aqua jogging class",
  "Try a beginner's paddleboarding workout",
  "Do a beginner's resistance ball workout",
  "Take a leisurely snowshoeing trip",
  "Try a beginner's balance board workout",
  "Do a beginner's hula hoop workout",
  "Take a gentle mountain biking trip",
  "Try a beginner's paddleboarding workout",
];

const randomActivityBtn = document.getElementById("randomActivityBtn");
const activityResultWindow = document.getElementById("activityResultWindow");

randomActivityBtn.addEventListener("click", () => {
  const randomActivity =
    randomActivities[Math.floor(Math.random() * randomActivities.length)];
  activityResultWindow.textContent = `Random Activity: ${randomActivity}\n${activityResultWindow.textContent}`;
});

const randomWorkouts = [
  { scalar: 6, exercise: "Jumping jacks" },
  { scalar: 2, exercise: "Squats" },
  { scalar: 2, exercise: "Lunges" },
  { scalar: 8, exercise: "Plank (s)" },
  { scalar: 2, exercise: "Push-ups" },
  { scalar: 1, exercise: "Burpees" },
  { scalar: 1, exercise: "Mountain climbers" },
  { scalar: 3, exercise: "High knees" },
  { scalar: 2, exercise: "Sit-ups" },
  { scalar: 4, exercise: "Crunches" },
  { scalar: 3, exercise: "Reverse crunches" },
  { scalar: 1, exercise: "Russian twists" },
  { scalar: 2, exercise: "Bicycle crunches" },
  { scalar: 2, exercise: "Leg raises" },
  { scalar: 2, exercise: "Flutter kicks" },
  { scalar: 1, exercise: "Superman" },
  { scalar: 8, exercise: "Side plank (s)" },
  { scalar: 1, exercise: "Glute bridge" },
  { scalar: 1, exercise: "Fire hydrant" },
  { scalar: 1, exercise: "Donkey kicks" },
  { scalar: 1, exercise: "Tricep dips" },
  { scalar: 1, exercise: "Diamond push-ups" },
  { scalar: 1, exercise: "Incline push-ups" },
  { scalar: 1, exercise: "Decline push-ups" },
  { scalar: 1, exercise: "Shoulder press" },
  { scalar: 2, exercise: "Bicep curls" },
  { scalar: 1, exercise: "Lateral raises" },
  { scalar: 1, exercise: "Front raises" },
  { scalar: 1, exercise: "Tricep extensions" },
  { scalar: 1, exercise: "Hammer curls" },
  { scalar: 2, exercise: "Dumbbell rows" },
  { scalar: 1, exercise: "Deadlifts" },
  { scalar: 2, exercise: "Sumo squats" },
  { scalar: 2, exercise: "Jump squats" },
  { scalar: 1, exercise: "Jump lunges" },
  { scalar: 1, exercise: "Box jumps" },
  { scalar: 7, exercise: "Wall sits (s)" },
  { scalar: 1, exercise: "Single leg deadlifts" },
  { scalar: 1, exercise: "Calf raises" },
  { scalar: 20, exercise: "Jump rope (s)" },
  { scalar: 2, exercise: "Kettlebell swings" },
  { scalar: 1, exercise: "Russian kettlebell swings" },
  { scalar: 2, exercise: "Goblet squats" },
  { scalar: 1, exercise: "Lateral lunges" },
  { scalar: 1, exercise: "Step-ups" },
  { scalar: 1, exercise: "Bear crawl" },
  { scalar: 1, exercise: "Crab walk" },
  { scalar: 1, exercise: "Plank jacks" },
  { scalar: 1, exercise: "Mountain climber twist" },
  { scalar: 2, exercise: "Squat jumps" },
  { scalar: 2, exercise: "Broad jumps" },
];
const randomSeriousWkoutBtn = document.getElementById("randomSeriousWkoutBtn");
const seriousWorkoutResultWindow = document.getElementById(
  "seriousWorkoutResultWindow"
);

randomSeriousWkoutBtn.addEventListener("click", () => {
  const randomWorkout =
    randomWorkouts[Math.floor(Math.random() * randomWorkouts.length)];
  seriousWorkoutResultWindow.textContent = `${
    randomWorkout.scalar * (Math.floor(Math.random() * 10) + 3)
  } x ${randomWorkout.exercise}\n${seriousWorkoutResultWindow.textContent}`;
});
