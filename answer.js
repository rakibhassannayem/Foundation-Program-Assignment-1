function describeValue(value) {
  const type = typeof value;
  const isTrue = value ? 'truthy' : 'falsy';
  
  return `${type} | ${isTrue}`;
}

function getDayType(day) {
  switch (day) {
    case 'Friday':
    case 'Saturday':
      return 'Weekend';
      
    case 'Sunday':
    case 'Monday':
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
      return 'Working Day';
      
    default:
      return 'Invalid Day';
  }
}

function validateUsername(username) {
  if (username.length < 4) {
    return "Too Short";
  }

  if (username.includes(" ")) {
    return "No Space Allowed";
  }

  if (username.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }

  return "Available";
}

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
  let distanceFare = 50;

  if (distance > 2) {
    distanceFare += (distance - 2) * 15;
  }
  
  const waitingFare = waitingMinutes * 2;
  let totalFare = distanceFare + waitingFare;
  
  if (isNight) {
    totalFare = totalFare * 1.2;
  }
  
  return totalFare;
}

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  if (runsNeeded <= 0) {
    return "Won";
  }

  if (ballsLeft <= 0) {
    return "Lost";
  }

  const requiredRate = (runsNeeded / ballsLeft) * 6;
  let verdict = "";

  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
