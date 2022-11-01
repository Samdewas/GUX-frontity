import React, {useEffect} from "react";
import {connect} from "frontity";
import CommentsForm from "./comments-form";
import Commentdata from "./comments";

const Comments = ({actions, state, postId}) => {
    useEffect(() => {
        actions.source.fetch(`@comments/${postId}`);
    }, []);
    const data = state.source.get(`@comments/${postId}`);

    return (
        data.isReady && (
            <>
               <Commentdata id={postId} />
                <h6>Leave a Reply</h6>
                <CommentsForm postId={postId}/>
            </>
        )
    );
};

export default connect(Comments);
