import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  User,
  Bell,
  Shield,
  Smartphone,
  Mail,
  Lock,
  CreditCard,
  Moon,
  Eye,
  CheckCircle,
  Info,
  Download,
  Trash2,
} from "lucide-react";
import { useTheme } from "next-themes";

export function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground">Settings</h1>
        <p className="text-sm sm:text-base text-muted-foreground mt-1">
          Manage your account and system preferences
        </p>
      </div>

      {/* Appearance */}
      <Card className="p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
            <Moon className="text-gray-600 dark:text-gray-300" size={20} />
          </div>
          <h2 className="text-base sm:text-lg font-semibold text-foreground">Appearance</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Dark Mode</p>
            <p className="text-sm text-muted-foreground">Switch between light and dark theme</p>
          </div>
          <Switch
            checked={theme === "dark"}
            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          />
        </div>
      </Card>

      <Tabs defaultValue="profile" className="space-y-4 sm:space-y-6">
        <TabsList className="w-full overflow-x-auto flex">
          <TabsTrigger value="profile" className="flex-1 min-w-fit text-xs sm:text-sm">Profile</TabsTrigger>
          <TabsTrigger value="notifications" className="flex-1 min-w-fit text-xs sm:text-sm">Notifications</TabsTrigger>
          <TabsTrigger value="security" className="flex-1 min-w-fit text-xs sm:text-sm">Security</TabsTrigger>
          <TabsTrigger value="billing" className="flex-1 min-w-fit text-xs sm:text-sm">Billing</TabsTrigger>
          <TabsTrigger value="privacy" className="flex-1 min-w-fit text-xs sm:text-sm">Privacy</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <User className="text-blue-600" size={20} />
              </div>
              <h2 className="text-base sm:text-lg font-semibold text-foreground">
                Profile Information
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <User size={28} className="text-blue-600" />
                </div>
                <div>
                  <Button size="sm">Change Photo</Button>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                    JPG, PNG or GIF. Max size 2MB.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="sarah.johnson@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Home Address</Label>
                  <Input id="address" defaultValue="123 Main Street, Anytown, ST 12345" />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Bell className="text-purple-600" size={24} />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Notification Preferences
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-4">Alert Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">High Priority Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Immediate notifications for critical issues
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Medium Priority Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Notifications for warnings and unusual patterns
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Low Priority Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        General information and maintenance reminders
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-4">Notification Channels</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-foreground">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive alerts on your mobile device
                        </p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-foreground">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Get alerts sent to your email
                        </p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Smartphone className="text-gray-400" size={20} />
                      <div>
                        <p className="font-medium text-foreground">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">
                          Receive text messages for urgent alerts
                        </p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-4">Reports & Updates</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Weekly Summary</p>
                      <p className="text-sm text-muted-foreground">
                        System status and activity overview
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">Monthly Report</p>
                      <p className="text-sm text-muted-foreground">
                        Detailed analytics and insights
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">System Updates</p>
                      <p className="text-sm text-muted-foreground">
                        New features and improvements
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button>Save Preferences</Button>
                <Button variant="outline">Reset to Default</Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Shield className="text-green-600" size={24} />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Security Settings
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground mb-4">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <Button>Update Password</Button>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between max-w-2xl">
                  <div>
                    <p className="text-foreground">Enable 2FA for additional security</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Require a verification code in addition to your password
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-4">Active Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">iPhone 13 Pro</p>
                      <p className="text-sm text-muted-foreground">Last active: Just now</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Current</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">Chrome on MacBook</p>
                      <p className="text-sm text-muted-foreground">Last active: 2 hours ago</p>
                    </div>
                    <Button variant="ghost" size="sm">Sign Out</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Billing Settings */}
        <TabsContent value="billing">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <CreditCard className="text-blue-600" size={24} />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Billing & Subscription
              </h2>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Premium Plan</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      12 sensors • Insurance partnership • Priority support
                    </p>
                  </div>
                  <Badge className="bg-blue-600 text-white">Active</Badge>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-semibold text-foreground">$9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Next billing date: April 1, 2026
                </p>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4">Payment Method</h3>
                <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCard className="text-gray-400" size={20} />
                    <div>
                      <p className="font-medium text-foreground">•••• •••• •••• 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 12/2027</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Update</Button>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-foreground mb-4">Billing History</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">February 2026</p>
                      <p className="text-sm text-muted-foreground">Paid on Feb 1, 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">$9.99</p>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div>
                      <p className="font-medium text-foreground">January 2026</p>
                      <p className="text-sm text-muted-foreground">Paid on Jan 1, 2026</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">$9.99</p>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Privacy & Data Transparency */}
        <TabsContent value="privacy">
          <Card className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-lg flex items-center justify-center">
                <Eye className="text-teal-600 dark:text-teal-400" size={24} />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Privacy & Data Transparency
              </h2>
            </div>

            <div className="space-y-6">
              {/* Section A — What Data We Collect */}
              <div>
                <h3 className="font-medium text-foreground mb-3">What Data We Collect</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-0.5">•</span>
                    <span>Humidity and moisture levels from sensors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-0.5">•</span>
                    <span>Water usage patterns and trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-0.5">•</span>
                    <span>Sensor battery status and connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 mt-0.5">•</span>
                    <span>Alert history and response actions</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  We do <strong>NOT</strong> collect personal browsing data, audio, or video.
                </p>
              </div>

              {/* Section B — Who Can Access Your Data */}
              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-3">Who Can Access Your Data</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-medium text-foreground">You</p>
                      <p className="text-sm text-muted-foreground">
                        Full access to all your sensor data and history
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-medium text-foreground">AquaGuard Team</p>
                      <p className="text-sm text-muted-foreground">
                        Anonymized data only — used to improve system performance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="font-medium text-foreground">Insurance Partner</p>
                      <p className="text-sm text-muted-foreground">
                        Only aggregated risk scores — never raw sensor readings
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  We <strong>never</strong> sell your data to third parties.
                </p>
              </div>

              {/* Section C — How Your Data Benefits You */}
              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-3">How Your Data Benefits You</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-sm text-foreground">
                        Early leak detection saves an average of <strong>$2,000</strong> per incident
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-sm text-foreground">
                        Sharing risk scores earns a <strong>15% premium discount</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <div>
                      <p className="text-sm text-foreground">
                        Usage patterns help optimize your water consumption
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                  <div className="flex items-start gap-3">
                    <Info className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      All data is encrypted in transit and at rest. You can export or delete your data at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section D — Action Buttons */}
              <div className="border-t border-border pt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="gap-2">
                    <Download size={16} />
                    Download My Data
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Trash2 size={16} />
                    Request Data Deletion
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
