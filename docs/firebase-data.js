import { doc, setDoc, getDocs, collection } from "firebase/firestore";
import { db } from "./firebase-config.js";

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
export async function addEmployee(orgId, empId, empName, position, salary) {
  try {
    const employeeRef = doc(db, `Organizations/${orgId}/employees`, empId);
    await setDoc(employeeRef, {
      name: empName,
      position,
      salary,
    });
    console.log("Employee added successfully!");
  } catch (error) {
    console.error("Error adding employee: ", error);
  }
}

// Function to Retrieve Employees for an Organization
export async function getEmployees(orgId) {
  try {
    const employeesRef = collection(db, `Organizations/${orgId}/employees`);
    const snapshot = await getDocs(employeesRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error retrieving employees: ", error);
    return [];
  }
}
