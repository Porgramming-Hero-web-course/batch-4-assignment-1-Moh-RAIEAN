interface Profile {
  name: string;
  age: number;
  email: string;
}

export const updateProfile = (object: Profile, updates: Partial<Profile>) => ({
  ...object,
  ...updates,
});

const user = {
  name: "Mr. X",
  age: 21,
  email: "mrX@gmail.com",
};

// console.log(updateProfile(user, { age: 50 }));
