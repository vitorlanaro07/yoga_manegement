import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle('Yoga Management | Stutends');
    }

    async getHtml(){
        return `
            <div class="table-students">
            <div class="table-head">
                <h2 class="title">Students</h1>       
                <div class="new-student">
                    <span class="material-symbols-outlined icon">add</span>
                    <span class="material-symbols-outlined icon remove">undo</span>
                    <p class="text-button">New student</p>
                </div>      
            </div>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student</th>
                            <th>Genre</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>                
                            <tr onclick="getId(this)">
                                <td><%= student.id %></td>
                                <td><%= student.name %></td>
                                <td><%= student.genre %></td>
                                
                                <!-- Checking student status -->
                                <% if (student.status === 'active') {%>
                                    <td><span class="student-active"><%= student.status %></span></td>
                                <% } else if (student.status === 'inactive') {%>
                                    <td><span class="student-inactive"><%= student.status %></span></td>
                                <% } else if (student.status === 'interested') {%>
                                    <td><span class="student-interested"><%= student.status %></span></td>
                                <% }; %>
                            </tr>
                            <% }); %>
                    </tbody>
                </table>
            </div>
            <div class="forms-new-student">
                <form method="POST" action="/">
                    <div class="forms-row">
                        <div class="forms-cel">
                            <label for="name">Name</label>
                            <input type="text" name="name" id="name">
                        </div>
                        <div class="forms-cel">
                            <label for="lastname">Last name</label>
                            <input type="text" name="lastname" id="lastname">
                        </div>
                    </div>

                    <div class="forms-row">
                        <div class="forms-cel">
                            <label for="genre">Genre</label>
                            <select name="genre" id="genre">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div class="forms-cel">
                            <label for="telephone">Telephone</label>
                            <input type="tel" name="telephone" id="telephone">
                        </div>
                    </div>

                    <label for="status" class="form-align-center">Status</label>
                    <select name="status" id="" class="form-align-center">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="interested">Interested</option>
                    </select>

                    <label for="issues" class="form-align-start">Issues</label>
                    <textarea name="issues" id="" cols="30" rows="10"></textarea>
                    <input  type="submit" class="button-form" value="Submit">
                </form>
            </div>
        </div>
        `;
    }

} 