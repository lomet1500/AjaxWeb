package common.list;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/PutListServlet")
public class PutListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
 
    public PutListServlet() {
        super();
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		ListDAO dao = new ListDAO(); 
		List<ListVO> list = dao.getListList();
		String xml = "<dataset>";
		for(ListVO board : list) {
		xml +="<rest>";
		xml +="<boardno>" + board.getBoardNo() + "</boardno>"   
		    + "<title>" + board.getTitle() + "</title>" 
			+ "<content>" + board.getContent() + "</content>"
		    + "<writer>" + board.getWriter() + "</writer>"
			+ "<creationDate>" + board.getCreationDate() + "</creationDate>";
		xml += "</rest>";
		}
		xml +="</dataset>";
		
		response.getWriter().append(xml);
	}
	
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
