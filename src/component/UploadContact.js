import React from "react";
import styles from "./Contactlist.module.css";

const UploadContact = () => {
  const handleUploadData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "PUT",
          body: JSON.stringify({
            id: 1,
            title: "foo",
            body: "bar",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update data");
      }

    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleDeleteData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete data");
      }

    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className={styles["formData"]}>
      <div className={styles["innerDiv"]}>
        <input
          type="text"
          className={styles["inputName"]}
          placeholder="Enter Name"
        />
        <input
          type="email"
          className={styles["inputEmail"]}
          placeholder="Enter Email"
        />
      </div>
      <div className={styles["innerDiv"]}>
        <input
          type="tel"
          className={styles["inputPhone"]}
          placeholder="Enter Phone Number"
        />
        <input
          type="text"
          className={styles["inputWebsite"]}
          placeholder="Enter Website"
        />
      </div>
      <div className={styles["innerDivBtn"]}>
        <button
          onClick={handleUploadData}
          className={styles["inputButtonUpdate"]}
        >
          Update
        </button>
        <button
          onClick={handleDeleteData}
          className={styles["inputButtonDelete"]}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UploadContact;
