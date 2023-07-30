import { Box, Card, Typography } from '@mui/material'
import moment from 'moment'
import React from 'react'
import { useTranslation } from "react-i18next";


function TransacstionHistoryCard({transaction}) {
  const { t } = useTranslation();

  return (
   <Box component='div'>
    <Card sx={{backgroundColor:'white' ,py:2,mb:2}}>
        <Box>
        <Typography variant='h6' sx={{px:2, fontSize:16}}>
            {transaction.mode.toUpperCase()} $ {transaction.amount} {t("in")} {moment(transaction.createdAt).format('l')}
        </Typography>
        </Box>
    </Card>
   </Box>
  )
}

export default TransacstionHistoryCard