// Define the MajorCredits interface with a branded type
export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

// Define the MinorCredits interface with a branded type
export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

// Function to sum MajorCredits and return a new MajorCredits object
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  // Summing the credits and casting the result to MajorCredits
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Function to sum MinorCredits and return a new MinorCredits object
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  // Summing the credits and casting the result to MinorCredits
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}

