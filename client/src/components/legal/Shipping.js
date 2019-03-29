import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

import './_legal.scss'

class Shipping extends Component {
  render() {
    return (
      <div id="shipping">
        <h3>Shipping within United States</h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Order Value</Table.HeaderCell>
              <Table.HeaderCell>Standard / USPS</Table.HeaderCell>
              <Table.HeaderCell>Express</Table.HeaderCell>
              <Table.HeaderCell>Rush</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell>5-9 business days</Table.Cell>
              <Table.Cell>2-3 business days</Table.Cell>
              <Table.Cell>1-2 business days</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>up to $34.99</Table.Cell>
              <Table.Cell>$2.95</Table.Cell>
              <Table.Cell>$14.95</Table.Cell>
              <Table.Cell>$21.95</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>$35 + </Table.Cell>
              <Table.Cell style={{color: "red"}}>FREE</Table.Cell>
              <Table.Cell>$14.95</Table.Cell>
              <Table.Cell>$21.95</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <p>Orders over $35 will not be charged the standard shipping fee, these rartes are not applicable for orders shipped outside of the US</p>
        <h3>Shipping to Canada, Mexico and Rest of the World</h3>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Canada & Mexico</Table.HeaderCell>
              <Table.HeaderCell>Rest of the World</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>Stadard Shipping</Table.Cell>
              <Table.Cell>$14.95</Table.Cell>
              <Table.Cell>$24.95</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <p>Orders shipped outside of the contiguous US and to PO boxes are shipped via USPS Priority Mail and cannot be expedited.</p>
        <p>Please note that our delivery options refer only to the delivery time frame and not to the time required to prepare your order.  While most orders are ready for shipping within 1 day of ordering, some orders may take additional time.</p>

        <h3>Shipping within United States</h3>
        <p>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
        <p>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
        <p>Visit <a href="/#" style={{fontWeight: "bold"}}>Return & Exchanges</a> for more information on completing a return.</p>
      </div>
    )
  }
}

export default Shipping;
