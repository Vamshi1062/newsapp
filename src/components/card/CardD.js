import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const CardD = (props) => {
  const [btnClick, setBtnClick] = useState(false);

  const clickHandler = () => {
    setBtnClick(true);
  };
  
  useEffect(() => {
    console.log('outside read json started');
    if (btnClick) {
      console.log('inside read json started');
      const postData = async () => {
        try {
          const response = await fetch('http://localhost:3001/news', {
            method: 'POST',
            body: JSON.stringify({
              title: props.Title,
              urlToImage: props.Imgurl,
              author: props.Author,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.log(error);
        }
      };
  
      postData();
      console.log('outside read json ended');
    }
  }, [btnClick, props.Title, props.Imgurl, props.Author]);

  return (
    <Card
      style={{
        display: 'inline-block',
        width: 300,
        padding: 10,
        margin: 10,
      }}
    >
      <CardImg height="300px" src={props.Imgurl} alt="GFG Logo" />
      <CardBody>
        <CardTitle tag="h5">{props.Title}</CardTitle>
        <CardText>{`- ${props.Author === null ? 'NA' : props.Author}`}</CardText>
        {props.isdisplay ? (
          ''
        ) : btnClick ? (
          <Button className="btn-danger" disabled>
            Added To Read Later
          </Button>
        ) : (
          <Button onClick={clickHandler}>Read Later</Button>
        )}
      </CardBody>
    </Card>
  );
};

export default CardD;
