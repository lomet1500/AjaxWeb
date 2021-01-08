package common;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/modify")
public class ModfEmpServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public ModfEmpServ() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int empId = Integer.parseInt(request.getParameter("empId"));
		String fName = request.getParameter("fName");
		String lName = request.getParameter("lName");
		String email = request.getParameter("email");
		String phoneNumber = request.getParameter("phoneNumber");
		String jobId = request.getParameter("jobId");
		
		
		EmployeeVO vo = new EmployeeVO();
		vo.setEmployeeId(empId);
		vo.setFirstName(fName);
		vo.setLastName(lName);
		vo.setEmail(email);
    	vo.setPhoneNumber(phoneNumber);
		vo.setJobId(jobId);
		
		
		EmpDAO dao = new EmpDAO();
		EmployeeVO v = dao.modfEmp(vo);
		String result = "<result>";
		result += "<empId>" + v.getEmployeeId() + "</empId>";
		result += "<fName>" + v.getFirstName() + "</fName>";
		result += "<lName>" + v.getLastName() + "</lName>";
		result += "<email>" + v.getEmail() + "</email>";
		result += "<pNumber>" + v.getPhoneNumber() + "</pNumber>";
		result += "<hDate>" + v.getHireDate() + "</hDate>";
		result += "<jId>" + v.getJobId() + "</jId>";
		result += "<salary>" + v.getSalary() + "</salary>";
		result += "</result>";
		
		response.getWriter().append(result);
		
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
