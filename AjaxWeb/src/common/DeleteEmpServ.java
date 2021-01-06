package common;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/deleteEmp")
public class DeleteEmpServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
    public DeleteEmpServ() {
        super();
        
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// localhost/AjaxWeb/deleteEmp ? empId = 210
		String id = request.getParameter("empId");
		//null 값이 발생했을경우(parseInt 오류방지)
		id = id == null ? "0" : id;
		int employeeId = Integer.parseInt(id);
		EmployeeVO vo = new EmployeeVO();
		vo.setEmployeeId(employeeId);
		
		EmpDAO dao = new EmpDAO();
		if(dao.deleteEmp(vo)) {
		response.getWriter().append("<h1>OK</h1>");
		}else {
		response.getWriter().append("<h1>NG</h1>");
		}
		}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
