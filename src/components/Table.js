import React from 'react'
import './Table.css'

const table = () => {
  return (
    <>
        <table>
  <tbody>
    <tr id="header">
      <th>Participants</th>
      <th>Early Bird registration ends on 10th Oct 2023</th>
      <th>Registration ends on 25th Oct 2023</th>
    </tr>
    <tr id="single">
      <td />
      <td>Indian nationals</td>
      <td />
    </tr>
    <tr className="table-row">
      <td>Students</td>
      <td>Rs. 3500 (including GST)</td>
      <td>Rs. 4000/- (including GST)</td>
    </tr>
    <tr className="table-row">
      <td>Academicians</td>
      <td>Rs. 5500/- (including GST)</td>
      <td>Rs. 6000/- (including GST)</td>
    </tr>
    <tr className="table-row">
      <td>Industrialists/ R&amp;Ds</td>
      <td>Rs. 6500/- (including GST)</td>
      <td>Rs. 7000/- (including GST)</td>
    </tr>
    <tr id="single">
      <td></td>
      <td>Foreign nationals/Exchange participants</td>
      <td />
    </tr>
    <tr className="table-row">
      <td>Students</td>
      <td>100 USD</td>
      <td>120 USD</td>
    </tr>
    <tr className="table-row">
      <td>Academicians</td>
      <td>200 USD</td>
      <td>250 USD</td>
    </tr>
    <tr className="table-row">
      <td>Industrialists/ R&amp;Ds</td>
      <td>350 USD</td>
      <td>400 USD</td>
    </tr>
  </tbody>
</table>

    </>
  )
}

export default table