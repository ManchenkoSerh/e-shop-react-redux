import React from "react";
import {Grid,Divider,List,ListItem,Typography} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';
import "./footer.css"
import {BrowserRouter, Link} from "react-router-dom";

const Footer=()=>{
    return(
        <BrowserRouter>
        <Grid className="block-footer">
        <Grid
            width={12}
            className="block-footer__links"
        >
            <Grid direction="column"
                  xs={4}>
                <h3>Компанія</h3>
                <List className="block-footer__list">
                    <ListItem><Link to="/link">О компании</Link></ListItem>
                    <ListItem><Link to="/link">О компании</Link></ListItem>
                    <ListItem><Link to="/link">О компании</Link></ListItem>
                    <ListItem><Link to="/link">О компании</Link></ListItem>
                </List>
            </Grid>
            <Grid direction="column"
                  xs={4}>
                <h3>Покупцям</h3>
                <List className="block-footer__list">
                    <ListItem><Link to="/link">Адреса магазинов «Фокстрот»</Link></ListItem>
                    <ListItem><Link to="/link">Адреса магазинов «Фокстрот»</Link></ListItem>
                    <ListItem><Link to="/link">Адреса магазинов «Фокстрот»</Link></ListItem>
                    <ListItem><Link to="/link">Адреса магазинов «Фокстрот»</Link></ListItem>
                </List>
            </Grid>
            <Grid direction="column"
                  xs={4}>
                <h3>Контакти</h3>
                <List className="block-footer__list">
                    <ListItem><Link to="/link">Адреса магазинов «Фокстрот»</Link></ListItem>
                    <ListItem><Link to="/link">Адреса магазинов «Фокстрот»</Link></ListItem>
                </List>
                <Typography>Інформаційна служба:</Typography>
                <span>0 800 300-353</span>
                <Typography>Бесплатно со стационарных и мобильных телефонов в Украине</Typography>
                <Typography>Email:<Link>info@foxtrot.com.ua</Link></Typography><br/>
                <Typography>График работы Call-Центра:</Typography><br/>
                <Typography>
                    Пн-Пт 08:30-21:00<br/>
                    Сб-Вс 08:30-21:00
                </Typography>
            </Grid>
        </Grid>
        <Grid direction="row" xs={12}>
        <FacebookIcon color="action"/>
        <InstagramIcon color="action"/>
        <TwitterIcon/>
            <Typography>Всі права захищені &copy;  2020</Typography>
        </Grid>
        </Grid>
        </BrowserRouter>

    )
}

export default Footer;
