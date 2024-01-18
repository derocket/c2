function postAssignment() {
    const assignmentText = document.getElementById('assignmentText').value;
    const deadline = document.getElementById('deadline').value;
    const amount = document.getElementById('amount').value;

    if (assignmentText.trim() !== '' && deadline !== '' && amount.trim() !== '') {
        const assignmentList = document.getElementById('assignmentList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Assignment:</strong> ${assignmentText}<br>
            <strong>Deadline:</strong> ${deadline}<br>
            <strong>Amount:</strong> Rs. ${amount}<br>
            <button onclick="solveAssignment('${assignmentText}', '${deadline}', '${amount}')">Solve Assignment</button>
        `;
        assignmentList.appendChild(listItem);
        clearInputFields();
    } else {
        alert('Please fill in all fields.');
    }
}

function solveAssignment(assignmentText, deadline, amount) {
    // Here you can implement further functionality, e.g., marking the assignment as solved,
    // handling payments, etc. For simplicity, let's just remove the assignment from the list.
    const assignmentList = document.getElementById('assignmentList');
    const assignments = assignmentList.getElementsByTagName('li');
    for (let i = 0; i < assignments.length; i++) {
        const assignment = assignments[i];
        if (assignment.textContent.includes(assignmentText)) {
            assignmentList.removeChild(assignment);
            break;
        }
    }
}

function clearInputFields() {
    document.getElementById('assignmentText').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('amount').value = '';
}
