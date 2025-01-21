#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Employee {
    string name;
    string mobileNumber;
    double salary;
    int totalPresent;
    double calculatedSalary;
};

int main() {
    int numEmployees;

    cout << "Enter the number of employees: ";
    cin >> numEmployees;

    // Vector to store employee data
    vector<Employee> employees(numEmployees);

    for (int i = 0; i < numEmployees; ++i) {
        cout << "\nEnter details for employee " << i + 1 << ":\n";

        cout << "Name: ";
        cin.ignore(); // To clear the input buffer
        getline(cin, employees[i].name);

        cout << "Mobile Number: ";
        cin >> employees[i].mobileNumber;

        cout << "Monthly Salary: ";
        cin >> employees[i].salary;

        cout << "Total Days Present (out of 30): ";
        cin >> employees[i].totalPresent;

        // Calculate the salary for this month
        employees[i].calculatedSalary = (employees[i].totalPresent / 30.0) * employees[i].salary;
    }

    cout << "\nSalary details for the employees:\n";
    cout << "---------------------------------------\n";
    for (int i = 0; i < numEmployees; ++i) {
        cout << "Employee " << i + 1 << ":\n";
        cout << "Name: " << employees[i].name << "\n";
        cout << "Mobile Number: " << employees[i].mobileNumber << "\n";
        cout << "Monthly Salary: " << employees[i].salary << "\n";
        cout << "Days Present: " << employees[i].totalPresent << "\n";
        cout << "Calculated Salary for this Month: " << employees[i].calculatedSalary << "\n";
        cout << "---------------------------------------\n";
    }

    return 0;
}
