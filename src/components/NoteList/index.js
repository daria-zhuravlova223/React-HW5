import { getNote, deleteNote } from "../../redux/notes/noteOperations";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "@mui/material";
import { useEffect } from "react";

export const NoteList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getNote())
    }, [dispatch]);

    const onDelete = (id) => {
        dispatch(deleteNote(id));
    }

    const notes = useSelector((state)=>state.notes)

    return <ul>
        { notes.notes.map(item=> (
                    <Card sx={{ margin: 3, padding: 2 }} key={item.id}>
                        {item.text}
                        <Button variant="contained" onClick={()=> onDelete(item.id)}>Delete</Button>
                    </Card>
                ))
            }
    </ul>
}