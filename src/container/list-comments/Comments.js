import {connect} from "react-redux";
import AddComments from "../../components/comments/comments";
import {addComments} from "../../redux/action/actions";

const mapStateToProps=(state)=>({
    productsInfo: state.productsInfo
})
const mapDispatchToProps=(dispatch)=>({
    addComments:(comments,name,id)=>dispatch(addComments(comments,name,id))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddComments)
