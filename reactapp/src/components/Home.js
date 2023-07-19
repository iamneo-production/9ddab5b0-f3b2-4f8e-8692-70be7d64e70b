import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import './homecss.css' ;
import Choose from './userortrainer';


export default function Home() {
  return (
    <div className="homediv">
        <Link to="/homefitness">
        <div className="card1">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image="https://img.freepik.com/premium-vector/fitness-gym-logo_23987-169.jpg?w=2000"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fitness
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Experts define physical fitness as “one's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.”
           This description goes beyond being able to run quickly or lift heavy weights.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </div>
    </Link>
    <Link to="/homediet">
    <div className="card2">
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image="https://img.clearcals.com/site/images/articles/high_protein_diet_plan_indian_small.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Diet
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Many diets offer benefits that go beyond weight loss. The best programs for losing weight also improve your overall health. The biggest challenge is finding the one that will work for you.
          Yet the sheer number of available diet plans may make it difficult to get started. Different diets will be more suitable, sustainable, and effective for different people.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </Link>
    <Link to="/homelife">
    <div className="card3">
    <Card sx={{ maxWidth: 335 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image="https://english.mathrubhumi.com/image/contentid/policy:1.8040537:1674280833/no%20drugs.jpg?$p=24c83cd&f=4x3&w=1080&q=0.8"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Healthy LifeStyle
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The five low-risk lifestyle factors, namely never smoking or quitting for reasons other than illness, no excessive alcohol use, being physically active, healthy eating habits and healthy body fat levels were associated with longer LE free of the three NCDs .
          Let's Say NO to Alcohol and Smoking!!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </Link>
    <div className="started">
    <Link to="/userortrainer">
        <button id="startedbtn">
            Get Started</button></Link>
        
    </div>
    </div>
  );
}