// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. 
// При нажатии на кнопку комментарий должен удаляться из списка.

import { useState } from "react";

function CommentList() {
    const [value, setValue] = useState("");
    const [comments, setComments] = useState([
        { id: crypto.randomUUID(), text: "Это первый комментарий" },
        { id: crypto.randomUUID(), text: "Это второй комментарий" },
        { id: crypto.randomUUID(), text: "Это третий комментарий" }
    ]);

    function handleDeleteComment(commentId) {
        const newComments = comments.filter(comment => comment.id !== commentId);
        setComments(newComments);
    }

    const updateValue = (e) => {
        setValue(e.target.value);
    }

    const handleAddComment = () => {
        if (value.trim() === "") {
            return;
        }
        const newComments = [...comments, { id: crypto.randomUUID(), text: value }];
        setComments(newComments);
        setValue("");
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Введите новый комментарий" onChange={updateValue} value={value} />
                <button onClick={handleAddComment} className="addButton">Добавить комментарий</button>
            </div>
            {comments.map(comment => (
                <div key={comment.id} className="comments">
                    <p>{comment.text}</p>
                    <button onClick={() => handleDeleteComment(comment.id)} className="deleteButton">Удалить</button>
                </div>
            ))}
        </>
    );
}
export default CommentList;