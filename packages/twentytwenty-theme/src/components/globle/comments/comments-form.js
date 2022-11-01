import React from "react";
import { connect,styled } from "frontity";
import Loading from "../../loading";

const CommentsForm = ({ actions, state, postId }) => {
  const form = state.comments.forms[postId];
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          actions.comments.submit(postId);
        }}
      >
        {/* If the form is submitting, we can show some kind of a loading state */}
        {form?.isSubmitting && <Loading />}
        

        <Commentbox>
          <input
          placeholder="Name"
            name="author_name"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorName: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorName || ""}
          />
          {form?.errors?.authorName}
        </Commentbox>

        <Commentbox>
          <input
          placeholder="Email"
            name="author_email"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                authorEmail: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.authorEmail || ""}
          />
          {form?.errors?.authorEmail}
        </Commentbox>
        <Commentbox>
          <input
          className="msg"
          placeholder="Message"
            name="content"
            onChange={(e) =>
              actions.comments.updateFields(postId, {
                content: e.target.value
              })
            }
            value={state.comments.forms[postId]?.fields?.content || ""}
          />
          {/* Show the errors for the individual fields.
            E.g. content of a comment cannot be empty and the email must be valid */}
          {form?.errors?.content}
        </Commentbox>

        {/* Show the REST API error messages.
            E.g. "Sorry, you must be logged in to comment." */}
        {form?.errorMessage && <div>ERROR: {form?.errorMessage}</div>}

        {/* If the form was submitted successfully we can show a confirmation */}
       

        <Commentbtn className="btn-submit" type="submit" />
        <div>
          {form?.isSubmitted && "The comment was submitted successfully!"}
        </div>
      </form>
    </>
  );
};


export const Commentbox = styled.div`
input{
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
  max-width: 350px;
  height: 40px;
  width: 100%;
  margin-bottom: 21px;
  border-radius: 7px;
  border: none;
  outline: none;
  padding: 15px;
}
.msg{height: 250px;}

`;

export const Commentbtn = styled.input`


padding: 15px 39px;
  background: linear-gradient(98.81deg, #53E88B -0.82%, #15BE77 101.53%) !important;
  border-radius: 7px;
  border: none;
  color: #fff;
  font-weight: 800;
  margin-bottom:10px;
`;



export default connect(CommentsForm);
