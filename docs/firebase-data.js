import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "./firebase-config";

// Function to Add an Organization
export async function addOrganization(organizationId, name, email, password) {
  try {
    const orgRef = doc(db, "Organizations", organizationId);
    await setDoc(orgRef, {
      name,
      email,
      password, // Hash this in production (use libraries like bcrypt)
    });
    console.log("Organization added successfully!");
  } catch (error) {
    console.error("Error adding organization: ", error);
  }
}

// Function to Add an Employee
export async function addEmployee(organizationId, employeeId, name, position, salary) {
  try {
    const employeeRef = doc(db, `Organizations/${organizationId}/employees`, employeeId);
    await setDoc(employeeRef, {
      name,
      position,
      salary,
    });
    console.log("Employee added successfully!");
  } catch (error) {
    console.error("Error adding employee: ", error);
  }
}
