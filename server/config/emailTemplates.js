// export const SIGNUP_CONFIRMATION_TEMPLATE = `
// <!DOCTYPE html>
// <html xmlns="http://www.w3.org/1999/xhtml">

// <head>
//   <title>Welcome to Our Platform</title>
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
//   <style type="text/css">
//     body {
//       margin: 0;
//       padding: 0;
//       font-family: 'Open Sans', sans-serif;
//       background: #E5E5E5;
//     }

//     table, td {
//       border-collapse: collapse;
//     }

//     .container {
//       width: 100%;
//       max-width: 500px;
//       margin: 70px 0px;
//       background-color: #ffffff;
//     }

//     .main-content {
//       padding: 48px 30px 40px;
//       color: #000000;
//     }

//     .button {
//       width: 100%;
//       background: #22D172;
//       text-decoration: none;
//       display: inline-block;
//       padding: 10px 0;
//       color: #fff !important;
//       font-size: 14px;
//       text-align: center;
//       font-weight: bold;
//       border-radius: 7px;
//     }

//     @media only screen and (max-width: 480px) {
//       .container {
//         width: 80% !important;
//       }

//       .button {
//         width: 50% !important;
//       }
//     }
//   </style>
// </head>

// <body>
//   <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
//     <tbody>
//       <tr>
//         <td valign="top" align="center">
//           <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
//             <tbody>
//               <tr>
//                 <td class="main-content">
//                   <table width="100%" cellspacing="0" cellpadding="0" border="0">
//                     <tbody>
//                       <tr>
//                         <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
//                           Welcome, {{name}}!
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
//                           Thank you for signing up with us. Please confirm your email to activate your account.
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%; font-weight: 700;">
//                           Click the button below to verify your account:
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 24px;">
//                           <a href="{{verification_link}}" class="button">Verify Email</a>
//                         </td>
//                       </tr>
//                       <tr>
//                         <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
//                           If you did not sign up, please ignore this email.
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </body>
// </html>
// `;

export const SIGNUP_CONFIRMATION_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>Welcome to Our Platform</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css">
      body {
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        background: #e5e5e5;
      }

      table,
      td {
        border-collapse: collapse;
      }

      .container {
        width: 100%;
        max-width: 500px;
        margin: 70px 0px;
        background-color: #ffffff;
      }

      .main-content {
        padding: 48px 30px 40px;
        color: #000000;
      }

      @media only screen and (max-width: 480px) {
        .container {
          width: 80% !important;
        }
      }
    </style>
  </head>

  <body>
    <table
      width="100%"
      cellspacing="0"
      cellpadding="0"
      border="0"
      align="center"
      bgcolor="#F6FAFB"
    >
      <tbody>
        <tr>
          <td valign="top" align="center">
            <table
              class="container"
              width="600"
              cellspacing="0"
              cellpadding="0"
              border="0"
            >
              <tbody>
                <tr>
                  <td class="main-content">
                    <table
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td
                            style="
                              padding: 0 0 24px;
                              font-size: 18px;
                              line-height: 150%;
                              font-weight: bold;
                            "
                          >
                            Welcome, {{name}}!
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              padding: 0 0 10px;
                              font-size: 14px;
                              line-height: 150%;
                            "
                          >
                            We are excited to have you on board. Your account
                            has been successfully created.
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              padding: 0 0 10px;
                              font-size: 14px;
                              line-height: 150%;
                            "
                          >
                            ${
                              "{{email}}"
                                ? `Your registered email is:
                            <span style="color: #4c83ee">{{email}}</span>.`
                                : ""
                            }
                          </td>
                        </tr>
                        <tr>
                          <td
                            style="
                              padding: 0 0 10px;
                              font-size: 14px;
                              line-height: 150%;
                            "
                          >
                            If you have any questions, feel free to contact us at
                            <span style="color: #4C83EE; text-decoration: underline;">
                              {{contact_email}}
                            </span>
                            . Enjoy your experience!
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;

export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Email Verify</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #E5E5E5;
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px 0px;
      background-color: #ffffff;
    }

    .main-content {
      padding: 48px 30px 40px;
      color: #000000;
    }

    .button {
      width: 100%;
      background: #22D172;
      text-decoration: none;
      display: inline-block;
      padding: 10px 0;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      border-radius: 7px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 80% !important;
      }

      .button {
        width: 50% !important;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
                          Verify your email
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          You are just one step away to verify your account for this email: <span style="color: #4C83EE;">{{email}}</span>.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%; font-weight: 700;">
                          Use below OTP to verify your account.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 24px;">
                          <p class="button" >{{otp}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          This OTP is valid for 24 hours.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>

`;

export const PASSWORD_RESET_TEMPLATE = `

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #E5E5E5;
    }

    table, td {
      border-collapse: collapse;
    }

    .container {
      width: 100%;
      max-width: 500px;
      margin: 70px 0px;
      background-color: #ffffff;
    }

    .main-content {
      padding: 48px 30px 40px;
      color: #000000;
    }

    .button {
      width: 100%;
      background: #22D172;
      text-decoration: none;
      display: inline-block;
      padding: 10px 0;
      color: #fff;
      font-size: 14px;
      text-align: center;
      font-weight: bold;
      border-radius: 7px;
    }

    @media only screen and (max-width: 480px) {
      .container {
        width: 80% !important;
      }

      .button {
        width: 50% !important;
      }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center" bgcolor="#F6FAFB">
    <tbody>
      <tr>
        <td valign="top" align="center">
          <table class="container" width="600" cellspacing="0" cellpadding="0" border="0">
            <tbody>
              <tr>
                <td class="main-content">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding: 0 0 24px; font-size: 18px; line-height: 150%; font-weight: bold;">
                          Forgot your password?
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          We received a password reset request for your account: <span style="color: #4C83EE;">{{email}}</span>.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 16px; font-size: 14px; line-height: 150%; font-weight: 700;">
                          Use the OTP below to reset the password.
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 24px;">
                          <p class="button" >{{otp}}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 0 0 10px; font-size: 14px; line-height: 150%;">
                          The password reset otp is only valid for the next 15 minutes.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
`;
