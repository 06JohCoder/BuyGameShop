import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


function DeleteProduct(props) {
    const { item, onReload } = props;
    console.log("Đây là item Delete: ", item);
    const handleDelete = () => {
        // Logic to delete the product
        console.log("Deleting product with ID:", item.id);
        Swal.fire({
            title: "Bạn Chắc Xóa Chú?",
            text: "Nếu Xóa Sẽ Không Khôi Phục!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Vẫn Xóa",
            cancelButtonText: "Không Xóa"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3001/products/${item.id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(() => {

                        onReload();
                        Swal.fire({
                            title: "Đã Xóa!",
                            text: "Bạn Đã Xóa Thành Công.",
                            icon: "success"
                        });

                    })


            }
        });
    };

    return (
        <button onClick={handleDelete} className="delete-btn">
            Delete
        </button>
    );
}
export default DeleteProduct;