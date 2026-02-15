export const SKILLS_LIST = ["React", "Node", "MongoDB", "Express","Other",];

export const INITIAL_FORM = {
  name: "",
  email: "",
  age: "",
  gender: "",
  skills: [],
  experience: "",
  profileImage: null,
  profileImageURL: "",
  bio: "",
};

export const INITIAL_ERRORS = {};

export function validate(form) {
  const errs = {};
  if (!form.name.trim()) errs.name = "Name is required";
  if (!form.email.trim()) {
    errs.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errs.email = "Enter a valid email";
  }
  if (!form.age) {
    errs.age = "Age is required";
  } else if (isNaN(form.age) || +form.age < 1 || +form.age > 120) {
    errs.age = "Enter a valid age (1–120)";
  }
  if (!form.gender) errs.gender = "Select gender";
  if (form.skills.length === 0) errs.skills = "Pick at least one skill";
  if (!form.experience) {
    errs.experience = "Experience is required";
  } else if (isNaN(form.experience) || +form.experience < 0) {
    errs.experience = "Enter valid experience";
  }
  if (form.bio.length > 150) errs.bio = "Bio exceeds 150 characters";
  return errs;
}
