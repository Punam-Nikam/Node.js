function EmployeeCard(props) {
    return (
        <div className="employee-card">
            <h2>Employee Information</h2>

            <p>
                <b>Name:</b> {props.name}
            </p>

            <p>
                <b>Employee ID:</b> {props.employeeId}
            </p>

            <p>
                <b>Department:</b> {props.department}
            </p>

            <p>
                <b>Salary:</b> ₹{props.salary}
            </p>
        </div>
    );
}

export default EmployeeCard;

