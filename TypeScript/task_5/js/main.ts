interface MajorCredits {
	credits: number;
	brand: 'Major';
}

interface MinorCredits {
	credits: number;
	brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
	  credits: subject1.credits + subject2.credits,
	  brand: 'Major'
	};
  }

  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
	  credits: subject1.credits + subject2.credits,
	  brand: 'Minor'
	};
  }

const major1: MajorCredits = { credits: 10, brand: 'Major' };
const major2: MajorCredits = { credits: 20, brand: 'Major' };
const minor1: MinorCredits = { credits: 5, brand: 'Minor' };
const minor2: MinorCredits = { credits: 15, brand: 'Minor' };

console.log(sumMajorCredits(major1, major2)); // { credits: 30, brand: 'Major' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 20, brand: 'Minor' }
